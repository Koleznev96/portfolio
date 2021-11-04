const errorHandler = require('../../utils/errorHandler');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');

const User = require('../../models/User');


module.exports.login = async function(req, res) {
    const candidate = await User.findOne({login: req.body.login});
    if (candidate) {
        const passwordResult = req.body.password === candidate.password;
        if (passwordResult) {
            const token = jwt.sign({
                login: candidate.login,
                userId: candidate._id,
            }, keys.jwt, {expiresIn: 60000 * 60000});

            res.status(200).json({
                token: `Bearer ${token}`
            });

        } else {
            res.status(401).json({
                message: 'Неверный пароль или login.'
            });
        }
    }else {
        res.status(401).json({
            message: 'Неверный пароль или login.'
        });
    }
}

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({login: req.body.login});
    if (candidate) {
        res.status(409).json({
            message: 'Такой login уже занят. Попробуйте другой.'
        });
    } else {
        const user = new User({
            login: req.body.login,
            password: req.body.password,
        });
        try {
            await user.save();
            const token = jwt.sign({
                login: user.login,
                userId: user._id,
            }, keys.jwt, {expiresIn: 60000 * 60000});
            res.status(201).json({
                token: `Bearer ${token}`
            });
        } catch(e) {
            errorHandler(res, e);
            throw e;
        }
    }
}
