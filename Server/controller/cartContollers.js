const {
    where
} = require("sequelize")
const {
    Cart,
    Product,
    Order
} = require("../models")

const axios = require("axios")

const midtransClient = require('midtrans-client');



class CartController {
    static async getAll(req, res, next) {
        try {
            let {
                id: userId
            } = req.user
            const data = await Cart.findAll({
                where: {
                    userId: userId
                },
                include: Product,
            })

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async getCartById(req, res, next) {
        try {
            let {
                id: userId
            } = req.user
            let productId = req.params.productId
            let data = await Cart.findOne({
                where: {
                    userId: userId,
                    productId: productId
                },
                include: Product
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async postCart(req, res, next) {
        try {
            let {
                id: userId
            } = req.user

            let {
                productId
            } = req.params
            let {
                amount
            } = req.body

            const data = await Cart.findOne({
                where: {
                    userId: userId,
                    productId: productId
                }
            })

            if (data) {
                await data.update({
                    amount: data.amount + 1
                })
                res.status(200).json({message : "Product has been added to cart"})
            } else {
                let result = await Cart.create({
                    userId,
                    productId,
                    amount
                })
                console.log(result);
                res.status(201).json({
                    message: "Product has been added to cart"
                })
            }
        } catch (error) {
            next(error)
        }
    }

    static async patchCart(req, res, next) {
        try {
            let {
                id: userId
            } = req.user
            let {
                productId
            } = req.params
            let {
                amount
            } = req.body
            let cart = await Cart.findOne({
                where: {
                    userId: userId,
                    productId: productId
                }

            })
            if (!cart) throw {
                name: "Data not found"
            }

            console.log(amount, productId, cart);
            let result = await cart.update({
                amount
            })
            res.status(200).json({
                message: "Product's amount in the cart has been updated"
            })

        } catch (error) {
            next(error)
        }
    }
    static async deleteCart(req, res, next) {
        try {

            let {
                id: userId
            } = req.user
            let {
                productId
            } = req.params
            let cart = await Cart.findOne({
                where: {
                    userId: userId,
                    productId: productId
                }
            })
            if (!cart) throw {
                name: "Data not found"
            }
            await cart.destroy()
            res.status(200).json({

            })

        } catch (error) {
            next(error)

        }
    }
    static async midtrans(req, res, next) {
        try {
            const {
                totalPrice
            } = req.body

            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction: false,
                serverKey: 'SB-Mid-server-BNlwPhtP3JN1aj_kYTNpuUrN' //ini better di taruh di .env
            });

            const orderId = Math.random().toString()
            const amount = totalPrice

            console.log(req.user, "<<<<<<<<<<<<<<<<<<<<<<");

            let parameter = {
                "transaction_details": {
                    "order_id": orderId,
                    "gross_amount": amount
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "name": req.user.fullName,
                    "email": req.user.email,
                }
            };
            // 2.create transaction to midtrns

            await Order.create({
                orderId,
                userId: req.user.id,
                amount
            })
            const transaction = await snap.createTransaction(parameter)
            // transaction token
            let transactionToken = transaction.token;
            // console.log('transactionToken:', transactionToken);
            //3.create order in our database
            //kirim transaction token

            console.log(transactionToken);


            res.status(200).json({
                message: "Order created",
                transactionToken,
                orderId
            })
        } catch (error) {
            console.log(error);
        }
    }



    static async updatePayment(req, res, next) {
        try {
            const {
                orderId
            } = req.body


            console.log(req.body, "<<<<<<<<<<<<<<<<<<<<<<<");
            // const order = await Order.findOne(req.body.orderId)           
            const order = await Order.findOne({
                where: {
                    orderId
                }
            })
            if (!order) {
                return res.status(404).json({
                    message: "Order not found"
                })
            }
            console.log(order, "<<<<<<<<<<<ini ordeerrrrr");
            const serverKey = "SB-Mid-server-BNlwPhtP3JN1aj_kYTNpuUrN"
            const base64ServerKey = Buffer.from(serverKey + ":").toString("base64")

            const response = await axios.get(`https://api.sandbox.midtrans.com/v2/${orderId}/status`, {
                headers: {
                    Authorization: `Basic ${base64ServerKey}`
                }
            })
            const updateStatus = await order.update({
                status: "success"
            })
            console.log(updateStatus);

            console.log(response.data, "<<<<<<<<<<<<<<responsee midtranss");
            res.status(200).json({
                message: "Upgrade success"
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CartController