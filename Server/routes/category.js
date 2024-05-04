const express = require('express')
const CategoryController = require('../controller/categoryControllers')
const router = express.Router()

router.get("/categories", CategoryController.getCategory)


module.exports = router
