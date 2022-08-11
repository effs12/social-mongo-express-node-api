import asyncHandler from 'express-async-handler'

// @desc    Get all User tweets
// @route   GET /api/tweets/
// @access  Private
const getTweets = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Get All User Tweets!!'})
})

// @desc    Make Tweet
// @route   POST /api/tweets
// @access  Private
const makeTweet = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Make a Tweet!!'})
})

// @desc    Edit/Update Tweet
// @route   POST /api/tweets/:id
// @access  Private
const editTweet = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Edit this Tweet!!'})
})

// @desc    Delete Tweet
// @route   POST /api/tweets/:id
// @access  Private
const deleteTweet = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Delete this Tweet!!'})
})

export {
    getTweets,
    makeTweet,
    editTweet,
    deleteTweet,
}