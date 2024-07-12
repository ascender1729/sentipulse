const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/environment');
const sentimentRoutes = require('./routes/sentimentRoutes');
const Analysis = require('./models/analysis');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', sentimentRoutes);

Analysis.initTable()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(console.error);