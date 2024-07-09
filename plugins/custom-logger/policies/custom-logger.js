const jwt = require("jsonwebtoken");

module.exports = {
  name: "custom-logger",
  schema: {
    $id: "http://express-gateway.io/schemas/policies/custom-logger.json",
    type: "object",
    properties: {},
  },
  policy: (actionParams) => {
    console.log("actionParams==", actionParams);
    return (req, res, next) => {
      console.log(`Request: ${req.method} ${req.url}`);
      res.on("finish", () => {
        console.log(`Response: ${res.statusCode} - ${res.statusMessage}`);
      });
      next();
    };
  },
};
