const express = require('express');
const controller = require('./controller');
const router = express.Router();
const passport = require('passport');
const upload = require('../../middleware/upload');


router.post('/add_like',
    controller.add_like);

router.post('/del_like',
    controller.del_like);

router.post('/upload_image',
    passport.authenticate('jwt', {session: false}),
    upload.single('image'),
    controller.upload_image);

// localhost:5000/api/socialNetwork/start_sort
router.post('/creat_post',
    passport.authenticate('jwt', {session: false}),
    controller.creat_post);

// localhost:5000/api/socialNetwork/posts
router.get('/posts',
    controller.get_posts);

// localhost:5000/api/socialNetwork/atop_sort
router.post('/delete_post',
    passport.authenticate('jwt', {session: false}),
    controller.delete_post);


module.exports = router;
