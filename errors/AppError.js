class AppError extends Error {
  constructor(origin, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }

    this.name = "ValidationError";
    this.origin = origin;
  }
}

module.exports = AppError;
