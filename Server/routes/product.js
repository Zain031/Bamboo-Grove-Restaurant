const express = require('express')
const productController = require('../controller/productControllers')
const router = express.Router()

router.get("/products", productController.getAll)

router.get("/search",productController.search)

router.get("/products/:id",productController.getProductById)

router.get("/productByCategoryId/:id", productController.getProductByCateoryId)



module.exports = router
