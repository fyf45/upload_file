import file_upload = require('../utils/file_upload');
import apiModelServer = require("../model/server/api");
export = {
    upolad: async (req: Express.Request) => {
        const file = await file_upload(req);
        const fileName = file.path.split("upload_")[1];
        const key = fileName.split('.')[0];
        console.log(fileName, key)
        apiModelServer.upload(key, fileName)
    },
    getList: async (req: Express.Request) => {
        return await apiModelServer.getList();
    }
}