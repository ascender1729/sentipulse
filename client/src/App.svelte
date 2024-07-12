<script>
  import { fade, fly } from 'svelte/transition';
  import TextInput from './components/TextInput.svelte';
  import AnalyzeButton from './components/AnalyzeButton.svelte';
  import SentimentChart from './components/SentimentChart.svelte';
  import RecentAnalyses from './components/RecentAnalyses.svelte';
  import Animations from './components/Animations.svelte';
  
  let text = '';
  let sentiment = null;
  let recentAnalyses = [];
  let loading = false;

  async function handleAnalyze() {
    loading = true;
    try {
      const response = await fetch('http://localhost:3000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      sentiment = await response.json();
      fetchRecentAnalyses();
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      sentiment = { error: 'Failed to analyze sentiment. Please try again.' };
    } finally {
      loading = false;
    }
  }

  async function fetchRecentAnalyses() {
    try {
      const response = await fetch('http://localhost:3000/api/recent');
      recentAnalyses = await response.json();
    } catch (error) {
      console.error('Error fetching recent analyses:', error);
    }
  }

  fetchRecentAnalyses();
</script>

<main>
  <h1 in:fly="{{ y: -50, duration: 500 }}">SentiPulse: Social Sentiment Analyzer</h1>
  
  <div class="input-section" in:fly="{{ y: 50, duration: 500, delay: 200 }}">
    <TextInput bind:value={text} />
    <AnalyzeButton on:click={handleAnalyze} />
  </div>
  
  {#if sentiment}
    <div class="result" in:fade="{{ duration: 300 }}">
      <h2>Analysis Result</h2>
      {#if sentiment.error}
        <p class="error">{sentiment.error}</p>
      {:else}
        <p>Sentiment: <strong>{sentiment.sentiment}</strong></p>
        <p>Score: <strong>{sentiment.score.toFixed(2)}</strong></p>
      {/if}
    </div>
  {/if}
  
  <div class="chart-section" in:fly="{{ y: 50, duration: 500, delay: 400 }}">
    <SentimentChart {recentAnalyses} />
  </div>
  
  <div class="recent-section" in:fly="{{ y: 50, duration: 500, delay: 600 }}">
    <RecentAnalyses {recentAnalyses} />
  </div>
  
  <Animations show={loading} />
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
  }

  .input-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .result {
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .chart-section, .recent-section {
    width: 100%;
    margin-bottom: 2rem;
  }

  .error {
    color: #ff3e00;
  }

  @media (max-width: 600px) {
    main {
      padding: 10px;
    }

    h1 {
      font-size: 1.5rem;
    }

    .result, .chart-section, .recent-section {
      margin-bottom: 1rem;
    }
  }
</style>