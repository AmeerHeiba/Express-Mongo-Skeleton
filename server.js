const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

//Routes


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));