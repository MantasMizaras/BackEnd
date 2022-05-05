const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('./dbsetup');

const petsRoutes = express.Router();

petsRoutes.get('/pets', async (req, res) => {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM pets';
    const [result] = await conn.execute(sql);
    res.json(result);
  } catch (error) {
    console.log('error getting all pets', error);
    res.sendStatus(500);
  } finally {
    await conn?.end();
  }
});

module.exports = petsRoutes;
