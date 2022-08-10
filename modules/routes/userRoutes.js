import express from 'express'
const router = express.Router()

// @desc    Route to register new user 
// @route   POST /api/users
// @access  Public
router.post('/', (req, res) => {
    res.status(200).json({ message : 'Register New User'})
})

// @desc    Routes to login user
// @route   POST /api/users
// @access  Public
router.post('/login', (req, res) => {
    res.status(200).json({ message : 'Login User'})
})

// @desc    Routes to get user account
// @route   POST /api/users
// @access  Public
router.get('/account', (req, res) => {
    res.status(200).json({ message : 'User Account'})
})

export default router