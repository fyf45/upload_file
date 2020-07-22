import path = require("path");
import formidable = require("formidable");

export = function (req):Promise<formidable.File> {
    return new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.uploadDir = path.join(__dirname, "../files/");
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
            const { file } = files;
            if (!err) resolve(file);
            else reject(err);
        })
    })
}