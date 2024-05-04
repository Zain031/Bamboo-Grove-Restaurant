const { where } = require("sequelize");
const {
    Category
} = require("../models")


class CategoryController {
    static async getCategory(req, res, next) {
        try {
            const data = await Category.findAll()
            console.log(data);
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController