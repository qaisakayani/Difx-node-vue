const verifyToken = (req, res, next) => {
  const apiKey = req.headers["api-key"];

  if (apiKey != null && apiKey.length >= 6) {
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};
module.exports = verifyToken;
