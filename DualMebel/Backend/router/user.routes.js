const express = require("express")
const router = express.Router()
const { userControllerr } = require("../controller/user.controller")
router.get("/", userControllerr.getAllUsers)
router.post("/login", userControllerr.login)
router.post("/register", userControllerr.register)
module.exports = router