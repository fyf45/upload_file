var express = require('express');
var router = express.Router();

import controllerApi = require('../controller/api');


router.post('/file_upload', async function (req, res, next) {
    try {
        const file = await controllerApi.upolad(req);
    } catch (err) {
        res.send("error")
    }
})

router.get('/list',async function (req, res, next) {
    try {
        const result = await controllerApi.getList(req);
        res.send(result)
    } catch (err) {
        res.send("error")
    }
})
module.exports = router;