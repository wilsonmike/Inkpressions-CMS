"use strict";

const express = require("express");
const ink = express.Router();
const pool = require("./connection");

ink.get("/", (req, res) => {
    let query = `SELECT * FROM dlabelcombinednew   
  ORDER BY ORDERNUMBER`;
    pool.query(query).then((response) => {
      res.json(response.rows);
    });
  });

module.exports = ink;