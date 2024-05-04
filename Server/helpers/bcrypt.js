const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

const comparePassword = (password, hashedPass) => {
    return bcrypt.compareSync(password, hashedPass);
}

module.exports = {
    hashPassword,
    comparePassword
}