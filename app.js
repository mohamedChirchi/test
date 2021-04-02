const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors');
const to_do = require('./routes/to-do-list');
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json()); // application/json
app.use(cors())


app.use(to_do);
app.use((req, res, next) => {
    res.status(404).send("<p>invalid link</p>")
})
mongoose.connect("mongodb+srv://Mohamed:Mextnmextn@cluster0.6wfqb.mongodb.net/todolists?retryWrites=true&w=majority").then(
    app.listen(5000)
).catch(err =>{
    console.log(err);
})
