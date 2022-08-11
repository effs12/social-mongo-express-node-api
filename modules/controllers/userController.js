import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

// @desc    User Registration 
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body

    if(!username || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if User Exist 
    const userExist = await User.findOne({username})
    
    if(userExist){
        res.status(400)
        throw new Error('Username already registered')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        username,
        password : hashedPassword,
    })

    if(user){
        res.status(201).json({
            _id : user.id,
            username : user.username,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error(`Invalid user data`)
    }
})

// @desc    User Authentication
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body

    //Validate if username 
    const user = await User.findOne({username})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id : user.id,
            username : user.username,
            token : generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error(`Invalid credentials`)
    }
})

// @desc    User Account data
// @route   GET /api/users/account
// @access  Private
const getAccount= asyncHandler(async(req, res) => {
    res.status(200).json(req.user)
})

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    })
}

export {
    registerUser,
    loginUser,
    getAccount
}