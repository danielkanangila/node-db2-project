const ValidationError = require("./ValidationError");
const knex = require("knex");

function errorHandler(err, req, res, next) {
  console.log(err.origin);
  if (err.origin instanceof ValidationError) {
    res.status(400).json({
      message: "Validation error",
      fields: err.origin.data,
    });
    return false;
  }
  if (err.origin.code === "23505") {
    res.status(400).json({
      message: err.origin.detail,
    });
    return false;
  }
  //if (err.code === knex.errors)

  res.status(500).json({ message: err.message });
}

module.exports = errorHandler;
