const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (id, email) => {
    return jwt.sign({_id: id, email: email}, process.env.SECRET_KEY, {expiresIn: '1d'})
}

const signup = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id, user.email)

        res.status(200).json({email, token})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id, user.email)

        res.status(200).json({email, token})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

module.exports = {signup, login}