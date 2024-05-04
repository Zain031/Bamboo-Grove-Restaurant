const express = require('express')
const CartController = require('../controller/cartContollers')
const router = express.Router()


router.get("/carts",CartController.getAll)

router.post('/payment-midtrans', CartController.midtrans)

router.patch("/update-payment",CartController.updatePayment)

router.get("/carts/:productId", CartController.getCartById)

router.post("/carts/:productId", CartController.postCart)

router.patch("/carts/:productId", CartController.patchCart)

router.delete("/carts/:productId", CartController.deleteCart)


module.exports = router
