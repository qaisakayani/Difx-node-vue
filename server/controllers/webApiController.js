const axios = require("axios");
const callDifxApi = async (req, res) => {
  // call external api
  await axios
    .get("https://app-api.difx.io/api/v1/pairs")
    .then(function (response) {
      res.status(200).json(response.data);
    });
};

module.exports = {
  callDifxApi,
};
