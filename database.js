const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',    
    host: 'localhost',
    database: 'bankdb',      
    password: '0101',
    port: 5432,
  });
  module.exports = pool;
