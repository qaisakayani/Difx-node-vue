const express = require("express");
const ApiKeyMiddleware = require("../middleware/verifyToken"); //Middleware
const { callDifxApi } = require("../controllers/webApiController");
const router = express.Router();
router.get("/getDifx", ApiKeyMiddleware, callDifxApi);
module.exports = router;
