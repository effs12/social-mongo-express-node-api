import express from 'express'
import { 
    getTweets,
    makeTweet,
    editTweet,
    deleteTweet,
} from '../controllers/tweetController.js'
const router = express.Router()

router.route('/').get(getTweets).post(makeTweet)
router.route('/:id').put(editTweet).delete(deleteTweet)


export default router