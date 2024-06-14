const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',    // replace with your PostgreSQL username
    host: 'localhost',
    database: 'bankdb',      // replace with your PostgreSQL database name
    password: '0101',// replace with your PostgreSQL password
    port: 5432,
  });
  module.exports = pool;