const { HfInference } = require('@huggingface/inference');
const Analysis = require('../models/analysis');
const { HF_API_KEY } = require('../config/environment');

const hf = new HfInference(HF_API_KEY);

// Simple fallback sentiment analysis function
function simpleSentimentAnalysis(text) {
  const positiveWords = ['happy', 'good', 'great', 'excellent', 'wonderful', 'amazing', 'love', 'like'];
  const negativeWords = ['sad', 'bad', 'terrible', 'awful', 'horrible', 'hate', 'dislike'];

  const words = text.toLowerCase().split(/\s+/);
  let score = 0;

  words.forEach(word => {
    if (positiveWords.includes(word)) score++;
    if (negativeWords.includes(word)) score--;
  });

  if (score > 0) return { sentiment: 'POSITIVE', score: score / words.length };
  if (score < 0) return { sentiment: 'NEGATIVE', score: -score / words.length };
  return { sentiment: 'NEUTRAL', score: 0 };
}

exports.analyzeSentiment = async (req, res) => {
  try {
    const { text } = req.body;
    console.log('Analyzing text:', text);

    let result;
    try {
      // Try Hugging Face API first
      const hfResult = await hf.textClassification({
        model: 'distilroberta-base',
        inputs: text,
      });
      result = { sentiment: hfResult[0].label, score: hfResult[0].score };
    } catch (error) {
      console.error('Error with Hugging Face API, using fallback:', error);
      // Use fallback if Hugging Face API fails
      result = simpleSentimentAnalysis(text);
    }

    const analysis = new Analysis(text, result.sentiment, result.score);
    await analysis.save();

    // Simulate a delay to show loading animation (remove in production)
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.json(result);
  } catch (error) {
    console.error('Error in analyzeSentiment:', error);
    res.status(500).json({ error: 'An error occurred during analysis' });
  }
};

exports.getRecentAnalyses = async (req, res) => {
  try {
    const analyses = await Analysis.getRecent(10);
    res.json(analyses);
  } catch (error) {
    console.error('Error in getRecentAnalyses:', error);
    res.status(500).json({ error: 'An error occurred while fetching recent analyses' });
  }
};