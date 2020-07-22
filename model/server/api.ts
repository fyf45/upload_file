import sql = require('../index')
import { promises } from 'dns';
export = {
    upload(key: string, name: string):Promise<void> {
        return new Promise((resolve, reject) => {
            sql.query(
                `INSERT INTO image (file_key,file_name) VALUES ("${key}","upload_${name}")`, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                }
            )
        })
    },
    getList():Promise<void> {
        return new Promise((resolve, reject) => {
            sql.query(
                `SELECT * FROM image`, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                }
            )
        })
    }
}