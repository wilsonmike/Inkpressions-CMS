"use strict";
// require the Express module, body-parser, and cors
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// require our routes.js file
const ink = require("./inkpressions.api");
// creates an instance of an Express server
const app = express();

// Enable Cross Origin Resource Sharing so this API
// can be used from web-apps other domains.
app.use(cors());
// allow POST and PUT requests to use JSON bodies
app.use(bodyParser.json());
// use the routes file
app.use("/", ink);

// define the port
const port = 3000;
// run the server
app.listen(port, () => {
	console.log(`Listening on port: ${port}.`);
});