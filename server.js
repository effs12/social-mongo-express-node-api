import express from 'express'
import dotenv from 'dotenv'

import userRoutes from './modules/routes/userRoutes.js'

dotenv.config()
const app = express()

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(
    PORT, 
    () => console.log(`Server is running on port ${PORT}`)
)
