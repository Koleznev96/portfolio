const express = require('express');
const controller = require('./controller');
const router = express.Router();


router.post('/message',
    controller.send_message);


module.exports = router;
