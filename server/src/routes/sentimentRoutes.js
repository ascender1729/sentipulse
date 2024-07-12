const express = require('express');
const sentimentController = require('../controllers/sentimentController');

const router = express.Router();

router.post('/analyze', sentimentController.analyzeSentiment);
router.get('/recent', sentimentController.getRecentAnalyses);

module.exports = router;