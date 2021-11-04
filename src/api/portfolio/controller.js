const errorHandler = require('../../utils/errorHandler');
const MessageInfo = require('../../models/MessageInfo');

module.exports.send_message = async function(req, res) {
    try {
        const new_message = new MessageInfo({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        await new_message.save();
        res.status(201).json("OK");
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}
