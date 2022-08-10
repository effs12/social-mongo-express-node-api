import express from 'express'
import { 
    registerUser,
    loginUser,
    getAccount,
} from '../controllers/userController.js'
const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/account', getAccount)

export default router