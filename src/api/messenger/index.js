const express = require('express');
const controller = require('./controller');
const router = express.Router();
const passport = require('passport');
const upload = require('../../middleware/upload');


router.get('/profiles',
    controller.get_profiles);

router.get('/chats',
    passport.authenticate('jwt', {session: false}),
    controller.get_chats);

router.get('/chat/:id',
    passport.authenticate('jwt', {session: false}),
    controller.get_chat);

router.post('/new_chat',
    passport.authenticate('jwt', {session: false}),
    controller.new_chat);

router.post('/new_message',
    passport.authenticate('jwt', {session: false}),
    controller.new_message);


module.exports = router;
