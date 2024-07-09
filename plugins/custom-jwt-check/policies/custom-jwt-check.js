const jwt = require("jsonwebtoken");

module.exports = {
  name: "custom-jwt-check",
  schema: {
    $id: "http://express-gateway.io/schemas/policies/custom-jwt-check.json",
    type: "object",
    properties: {
      jwtSecret: {
        description: "JWT Secret key",
        type: "string",
      },
    },
  },
  policy: (actionParams) => {
    return (req, res, next) => {
      const token = req.headers["authorization"];
      if (!token) return res.status(403).send("Token is required");

      const tokenValue = token.split(" ")[1]; // Assuming Bearer token

      jwt.verify(tokenValue, actionParams.jwtSecret, (err, decoded) => {
        if (err) return res.status(500).send("Failed to authenticate tokensss");
        const channleCode = req.query.channleCode;
        if (decoded.channel_code === channleCode) {
          next();
        } else {
          res.status(403).send("Token does not contain the desired value");
        }
      });
    };
  },
};
