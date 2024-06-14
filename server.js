const express = require('express');
const app = express();
const pool = require('./database');

// API Endpoint to get details of all banks
app.get('/banks', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM banks');
      res.json(result.rows);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('An error occurred');
    }
  });
  
  // API Endpoint to get branch details for a specific IFSC code
  app.get('/branches/:ifsc', async (req, res) => {
    const { ifsc } = req.params;
    try {
      const result = await pool.query('SELECT * FROM bank_branches WHERE ifsc = $1', [ifsc]);
      if (result.rows.length === 0) {
        return res.status(404).send('Branch not found');
      }
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})