const db = require("diskdb");

// https://www.npmjs.com/package/diskdb

db.connect("./data",
    ["users", "oportunities"]);

module.exports = db;
