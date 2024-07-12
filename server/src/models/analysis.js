const db = require('../config/database');

class Analysis {
  constructor(text, sentiment, score) {
    this.text = text;
    this.sentiment = sentiment;
    this.score = score;
  }

  async save() {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO analyses (text, sentiment, score) VALUES (?, ?, ?)', 
        [this.text, this.sentiment, this.score], 
        function(err) {
          if (err) reject(err);
          resolve(this.lastID);
        }
      );
    });
  }

  static async getRecent(limit) {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM analyses ORDER BY id DESC LIMIT ?', [limit], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  static async initTable() {
    return new Promise((resolve, reject) => {
      db.run(`CREATE TABLE IF NOT EXISTS analyses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        sentiment TEXT,
        score REAL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )`, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

module.exports = Analysis;