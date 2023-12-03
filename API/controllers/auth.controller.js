import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'

export const signup = async (req, res) => {
  const { Username, Email, Password } = req.body
  const hashedPassword = bcryptjs.hashSync(Password, 10)

  let newUser
  try {
    newUser = new User({ Username, Email, Password: hashedPassword })
    newUser = await newUser.save()
  } catch (error) {
    res.status(500).json(error.message)
  }
  if (!newUser) {
    res.status(500).json('User not created.')
  }

  res.status(201).json('User created successfully.')
}
