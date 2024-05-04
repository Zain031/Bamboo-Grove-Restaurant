const express = require('express')
const router = express.Router()
const user = require("./user")
const products = require("./product")
const categories = require("./category")
const carts = require("./cart")
const orders = require("./order")
const authentication = require('../middleware/authentication')


router.use(user)

router.use(authentication)

router.use(products)

router.use(categories)

router.use(orders)

router.use(carts)


module.exports = router
