import asyncHandler from 'express-async-handler'
import Tweet from '../models/tweetModel.js'

// @desc    Get all User tweets
// @route   GET /api/tweets/
// @access  Private
const getTweets = asyncHandler(async (req, res) => {
    const tweets = await Tweet.find({ user: req.user.id })

    res.status(200).json(tweets)
})

// @desc    Make Tweet
// @route   POST /api/tweets
// @access  Private
const makeTweet = asyncHandler(async (req, res) => {
    if (!req.body.content) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const tweet = await Tweet.create({
        user: req.user.id,
        content: req.body.content,
    })
    
    res.status(200).json(tweet)
})

// @desc    Edit/Update Tweet
// @route   POST /api/tweets/:id
// @access  Private
const editTweet = asyncHandler(async (req, res) => {
    const tweet = await Tweet.findById(req.params.id)

    if (!tweet) {
      res.status(400)
      throw new Error('Tweet does not exist')
    }

    // Check if User exist
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if the logged user match the tweet user
    if (tweet.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized to edit this tweet')
    }

    const editTweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.status(200).json(editTweet)
})

// @desc    Delete Tweet
// @route   POST /api/tweets/:id
// @access  Private
const deleteTweet = asyncHandler(async (req, res) => {
    const tweet = await Tweet.findById(req.params.id)

    if (!tweet) {
        res.status(400)
        throw new Error('Tweet does not exist')
    }

    // Check if User exist
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if the logged user match the tweet user
    if (tweet.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized to edit this tweet')
    }

    await tweet.remove()

    res.status(200).json({ id: req.params.id })
})

export {
    getTweets,
    makeTweet,
    editTweet,
    deleteTweet,
}