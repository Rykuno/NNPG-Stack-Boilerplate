const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["ui"]);
const path = require("path");

module.exports = withTM({
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../")
  }
});
