"use strict";
var path = require("path");
var formidable = require("formidable");
module.exports = function (req) {
    return new Promise(function (resolve, reject) {
        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.uploadDir = path.join(__dirname, "../files/");
        form.keepExtensions = true;
        form.parse(req, function (err, fields, files) {
            var file = files.file;
            if (!err)
                resolve(file);
            else
                reject(err);
        });
    });
};
