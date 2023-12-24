const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// const path = require("path");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL } = process.env;
const stripe = require("./Routes/Stripe")
const order = require("./Routes/Orders")

const router = express.Router();

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true, useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5050,
    })
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((error) => console.log(error));



app.listen(5050, () => {
    console.log("Server is listening on port 5050");
});


app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);


app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
app.use("/stripe", stripe);
app.use("/orders", order)

