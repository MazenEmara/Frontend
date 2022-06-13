const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const orderRouter = require("./routes/Orders");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})
app.use(cors());
app.use(bodyParser.json());
app.use(orderRouter);



app.use(express.json());
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});