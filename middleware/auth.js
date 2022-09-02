const user = require('../model/user');
const jwt = require('jsonwebtoken');

module.exports = protect = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_KEY, async (err, decoded) => {
        if (err) return res.sendStatus(403);

        req.user = await user.findById(decoded._id).select('-password');

        next();
    });
};
