"use strict";

const express = require("express");
const ink = express.Router();
const pool = require("./connection");

ink.get("/", (req, res) => {
    let query = `select * from thedirtlabelfinaltable order by ordernumber`;
    pool.query(query).then((response) => {
      res.json(response.rows);
    });
  });

  ink.get("/distinct", (req, res) => {
    let query = `select * from thedirtlabelshipping`;
    pool.query(query).then((response) => {
      res.json(response.rows);
    });
  });


  

module.exports = ink;