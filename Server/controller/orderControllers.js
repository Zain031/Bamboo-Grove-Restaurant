const { where } = require("sequelize")
const {Order} = require("../models")

class OrderController{
    static async getAllOrder(req,res,next){
        try {
            const{id:userId} = req.user
            const data = await Order.findAll({
                where :{
                    userId : userId
                }
            })
            res.status(200).json(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }



}

module.exports = OrderController