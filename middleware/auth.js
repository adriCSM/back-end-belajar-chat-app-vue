const user = require('../model/user');
const jwt = require('jsonwebtoken');

module.exports = protect = async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            const token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.ACCESS_KEY);

            req.user = await user.findById(decoded._id).select('-password');
            next();
        } catch (err) {
            res.sendStatus(401);
        }
    }
};
