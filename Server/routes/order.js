const express = require('express')
const OrderController = require('../controller/orderControllers')
const router = express.Router()

router.get("/orders",OrderController.getAllOrder)

module.exports = router
