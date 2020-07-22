"use strict";
var sql = require("../index");
module.exports = {
    upload: function (key, name) {
        return new Promise(function (resolve, reject) {
            sql.query("INSERT INTO image (file_key,file_name) VALUES (\"" + key + "\",\"upload_" + name + "\")", function (err, res) {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    },
    getList: function () {
        return new Promise(function (resolve, reject) {
            sql.query("SELECT * FROM image", function (err, res) {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
};
