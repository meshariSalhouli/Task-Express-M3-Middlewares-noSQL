const errorHandelling = function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandelling;
