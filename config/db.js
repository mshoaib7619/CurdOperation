// db/db.js
const { Pool } = require('pg');


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "user",
  password: "8686",
  port: 5433,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to the PostgreSQL database successfully!');
  } catch (err) {
    console.error('Failed to connect to the PostgreSQL database:', err.message);
  }
};

connectDB();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
