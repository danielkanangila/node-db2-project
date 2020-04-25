const express = require("express");
const Sale = require("./salesModel");
const AppError = require("./../../errors/AppError");

const salesRouter = express.Router();

salesRouter.get("/cars/:id/sales", async (req, res, next) => {
  try {
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to retrieve sale list."
      )
    );
  }
});
salesRouter.post("/cars/:id/sales", async (req, res, next) => {
  try {
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to retrieve sale list."
      )
    );
  }
});
salesRouter.get("/cars/:id/sales/:saleId", async (req, res, next) => {
  try {
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to retrieve sale list."
      )
    );
  }
});
salesRouter.put("/cars/:id/sales/:saleId", async (req, res, next) => {
  try {
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to retrieve sale list."
      )
    );
  }
});
salesRouter.delete("/cars/:id/sales/:saleId", async (req, res, next) => {
  try {
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to retrieve sale list."
      )
    );
  }
});

// Middleware
async function validateIds(req, res, next) {}
