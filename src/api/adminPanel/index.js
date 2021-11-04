const express = require('express');
const controller = require('./controller');
const router = express.Router();
const passport = require('passport');


router.get('/sites',
    controller.get_sites);

router.post('/visit',
    controller.visit);

router.post('/creat_site',
    passport.authenticate('jwt', {session: false}),
    controller.creat_site);


module.exports = router;
