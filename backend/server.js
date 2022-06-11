const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const product_routes = require("./controllers/productControllers");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products");
const orderRouter = require("./routes/Orders");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})
app.use(cors());
app.use(bodyParser.json());
app.use(productRouter);
app.use(orderRouter);



app.use(express.json());
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});