const errorHandler = require('../../utils/errorHandler');
const User = require('../../models/User');
const Chat = require('../../models/Chat');
const Message = require('../../models/Message');


module.exports.get_profiles = async function(req, res) {
    try {
        const users = await User.find();
        return res.status(201).json(users);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.get_chats = async function(req, res) {
    try {
        const user = await User.findOne({_id: req.user.id});
        const chats = await Chat.find({users: {$elemMatch: {_id: user._id, login: user.login}}});
        const new_chats = await chats.map(item => {
            return {_id: item._id, message: item.message, date: item.date, profile: item.users[0]._id.toString() === user._id.toString() ? item.users[1] : item.users[0]}
        });
        return res.status(201).json(new_chats);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.get_chat = async function(req, res) {
    try {
        const {id} = req.params;
        const messages = await Message.find({chat_id: id});
        return res.status(201).json(messages);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

const push_socket_new_message = (data, login) => {
    io_data.forEach(item => {
        if (item.login === login) {
            io.to(item.socket_id).emit('message', data);
        }
    });
}

const push_socket_new_chat = (data, login) => {
    io_data.forEach(item => {
        if (item.login === login) {
            io.to(item.socket_id).emit('chat', data);
        }
    });
}

module.exports.new_message = async function(req, res) {
    try {
        const date = await new Date();
        const user = await User.findOne({_id: req.user.id});
        const date_str = date.getHours() + ':' + date.getMinutes();
        if (req.body.chat_id) {
            let chat = await Chat.findOne({_id: req.body.chat_id});
            const login_up = chat.users[0].login.toString() === user.login.toString() ? chat.users[1].login : chat.users[0].login;
            chat.message = req.body.message;
            chat.date = date_str;
            const new_message = new Message({
                chat_id: chat._id,
                author: {
                    _id: user._id,
                    login: user.login,
                },
                message: req.body.message,
            });
            push_socket_new_message(new_message, login_up);
            await chat.save();
            await new_message.save();
            res.status(201).json(new_message);
        }
        return res.status(404).json('Error');
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.new_chat = async function(req, res) {
    try {
        const date = await new Date();
        const user = await User.findOne({_id: req.user.id});
        const user_up = await User.findOne({_id: req.body.profile_id});
        const date_str = date.getHours() + ':' + date.getMinutes();
        let chat = new Chat({
            users: [
                {
                    _id: user._id,
                    login: user.login,
                },
                {
                    _id: user_up._id,
                    login: user_up.login,
                },
            ],
            message: req.body.message,
            date: date_str,
            profile: user_up,
        });
        const new_message = new Message({
            chat_id: chat._id,
            author: {
                _id: user._id,
                login: user.login,
            },
            message: req.body.message,
        });
        push_socket_new_chat(chat, user_up.login);
        await chat.save();
        await new_message.save();
        res.status(201).json({chat: {_id: chat._id, users: chat.users, message: chat.message, date: chat.date, profile: user_up}, message: new_message});
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}
