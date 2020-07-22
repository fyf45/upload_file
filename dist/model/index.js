"use strict";
var mysql = require("mysql");
var mysqlConfig = require("../config/mysql.config");
var sql = mysql.createConnection(mysqlConfig);
sql.connect();
require('./tables/image')(sql);
module.exports = sql;
