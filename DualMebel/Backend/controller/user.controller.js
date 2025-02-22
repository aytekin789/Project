const { userSchema } = require("../schema/user.schema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userControllerr = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body

            const user = await userSchema.findOne({ username: username })

            if (!(await bcrypt.compare(password, user.password))) {
                res.status(406).json({ message: "Username and Password wrong!" })
                return
            }

            const token = jwt.sign({
                username: user.username,
                _id:user._id,
                role: user.role,
                basket: user.basket,
                wishlist: user.wishlist,
            }, "AliKey", { expiresIn: "12h" })

            res.status(200).send(token)

        } catch (error) {
            res.status(500).json({ message: error })
        }

    },
    register: async (req, res) => {
        try {
            const { username, password } = req.body
            const user = await userSchema.findOne({ username: username })

            const hashedPass = await bcrypt.hash(password, 10)

            const newUser = await userSchema.create({
                username: username,
                password: hashedPass,
            })

            console.log(newUser)
            const token = await jwt.sign({
                username: newUser.username,
                _id:user._id,
                role: newUser.role,
                basket: newUser.basket,
                wishlist: newUser.wishlist,
            }, "AliKey", { expiresIn: "12h" })

            res.status(200).send(token)

        } catch (error) {
            res.status(500).json({ message: "Server error" + error })
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const target = await userSchema.find()
            res.send(target)
        } catch (error) {
            res.send("item is not found")
        }
    },
  

}
module.exports = { userControllerr }