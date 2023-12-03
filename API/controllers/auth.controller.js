import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'
import { errorHandler } from '../utils/error.js'

export const signup = async (req, res, next) => {
  const { Username, Email, Password } = req.body
  const hashedPassword = bcryptjs.hashSync(Password, 10)

  let newUser
  try {
    newUser = new User({ Username, Email, Password: hashedPassword })
    newUser = await newUser.save()
    res.status(201).json('User created successfully.')
  } catch (error) {
    next(error)
  }
}
