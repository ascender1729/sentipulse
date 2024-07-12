const db = require('./src/config/database');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS analyses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    sentiment TEXT,
    score REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

console.log('Database setup complete');
