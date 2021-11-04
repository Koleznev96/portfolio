const errorHandler = require('../../utils/errorHandler');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Image = require('../../models/Image');


module.exports.upload_image = async function(req, res) {
    try {
        const image_url = req.file ? req.file.path : '';
        if (image_url) {
            const image = new Image({
                url: image_url
            });
            await image.save();
            return res.status(201).json(image);
        }
        return res.status(404).json('Error');
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}


module.exports.creat_post = async function(req, res) {
    try {
        const { text, date, image } = req.body;
        const user = await User.findOne({_id: req.user.id});
        const post = new Post({
            author: user.login,
            text,
            images: image ? [image.url] : [],
            date,
            like: 0
        });
        await post.save();
        res.status(201).json(post);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.add_like = async function(req, res) {
    try {
        const { _id } = req.body;
        let post = await Post.findOne({_id: _id});
        post.like = post.like + 1;
        await post.save();
        res.status(201).json(post);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.del_like = async function(req, res) {
    try {
        const { _id } = req.body;
        let post = await Post.findOne({_id});
        post.like = post.like - 1;
        await post.save();
        res.status(201).json(post);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.get_posts = async function(req, res) {
    try {
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.delete_post = async function(req, res) {
    try {
        const { id } = req.body;
        res.status(201).json("OK");
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}
