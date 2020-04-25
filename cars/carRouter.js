const express = require("express");
const Car = require("./carModel");
const AppError = require("./../errors/AppError");

const router = express.Router();

router.get("/cars", async (req, res, next) => {
  try {
    const car = await Car.find();
    res.json(car);
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to retrieve car list."
      )
    );
  }
});
router.post("/cars", async (req, res, next) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    next(new AppError(error, "An error while trying to insert new car."));
  }
});
router.get("/cars/:id", validateCarId, (req, res, next) => {
  try {
    res.json(req.car);
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to retrieve the car with the specified ID."
      )
    );
  }
});
router.put("/cars/:id", validateCarId, async (req, res, next) => {
  try {
    const car = await Car.update(req.car.id, req.body);
    res.json(car);
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to update the car with the specified ID."
      )
    );
  }
});
router.delete("/cars/:id", validateCarId, async (req, res, next) => {
  try {
    await Car.remove(req.params.id);
    res.json({ id: req.params.id });
  } catch (error) {
    next(
      new AppError(
        error,
        "An error occurred while trying to remove the car with the specified ID."
      )
    );
  }
});

// Middleware
async function validateCarId(req, res, next) {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      res.status(400).json({ message: "Invalid car ID" });
      return false;
    }
    req.car = car;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "An error occurred while trying to retrieve the car with the specified ID.",
    });
  }
}

module.exports = router;
