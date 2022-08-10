import asyncHandler from 'express-async-handler'

// @desc    User Registration 
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message : 'Register New User'})
})

// @desc    User Authentication
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message : 'Login User'})
})

// @desc    User Account data
// @route   GET /api/users/account
// @access  Private
const getAccount= asyncHandler(async(req, res) => {
    res.status(200).json({ message : 'User Account'})
})

export {
    registerUser,
    loginUser,
    getAccount
}