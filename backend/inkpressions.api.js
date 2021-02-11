"use strict";

const express = require("express");
const ink = express.Router();
const pool = require("./connection");

ink.get("/", (req, res) => {
    let query = `SELECT * FROM dirtlabelcleanpricing`;
    pool.query(query).then((response) => {
      res.json(response.rows);
    });
  });

  ink.get("/distinct", (req, res) => {
    let query = `select distinct on (ordernumber) * from dlabelcombinednew`;
    pool.query(query).then((response) => {
      res.json(response.rows);
    });
  });


  

module.exports = ink;