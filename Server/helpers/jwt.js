const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;
const secret = "secret";


const signToken = (payload) => {
    return jwt.sign(payload, secret);
}

const verifyToken = (token) => {
    return jwt.verify(token, secret)
}

module.exports = { signToken, verifyToken };