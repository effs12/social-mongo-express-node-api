import express from 'express'
import { 
    getTweets,
    makeTweet,
    editTweet,
    deleteTweet,
} from '../controllers/tweetController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(protect,getTweets).post(protect,makeTweet)
router.route('/:id').put(protect,editTweet).delete(protect,deleteTweet)


export default router