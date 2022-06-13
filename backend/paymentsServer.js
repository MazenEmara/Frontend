const express = require("express")
const mongoose = require('mongoose');
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const paymentRouter = require("./routes/Payments");
const cors = require("cors")

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(paymentRouter)

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})




/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const productRoutes = require('./routes/Products'); //default moshkela

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api',productRoutes);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});*/