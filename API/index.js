import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './Routes/user.route.js'
import AuthRouter from './Routes/auth.route.js'
dotenv.config()

const app = express()
app.use(express.json())

mongoose
  .connect(process.env.MONGO)
  .then(
    app.listen(3000, () => {
      console.log('MongoDB is connected and Server is running on port 3000')
    })
  )
  .catch((error) => {
    console.log(error)
  })

app.use('/user', UserRouter)
app.use('/auth', AuthRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})
