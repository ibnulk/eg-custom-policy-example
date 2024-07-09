module.exports = {
  version: "0.0.1",
  init: function (pluginContext) {
    let policy = require("./policies/custom-jwt-check");
    pluginContext.registerPolicy(policy);
  },
  policies: ["custom-jwt-check"],
  schema: {
    $id: "https://express-gateway.io/schemas/plugins/custom-jwt-check.json",
  },
};
