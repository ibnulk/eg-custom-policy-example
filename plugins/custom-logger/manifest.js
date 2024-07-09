module.exports = {
  version: "0.0.1",
  init: function (pluginContext) {
    let policy = require("./policies/custom-logger");
    pluginContext.registerPolicy(policy);
  },
  policies: ["custom-logger"],
  schema: {
    $id: "https://express-gateway.io/schemas/plugins/custom-logger.json",
  },
};
