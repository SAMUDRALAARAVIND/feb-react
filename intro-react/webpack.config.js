// It will be run in the  nodejs and not in browser
const path = require("path");

module.exports = {
    entry: "./src/abc.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}