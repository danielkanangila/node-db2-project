const express = require("express");
const cors = require("cors");
const carsRouter = require("./cars/carRouter");
const errorHandler = require("./errors/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", carsRouter);
app.use(errorHandler);

module.exports = app;
