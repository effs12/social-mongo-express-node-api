import express from 'express'
import { 
    registerUser,
    loginUser,
    getAccount,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/account', protect, getAccount)

export default router