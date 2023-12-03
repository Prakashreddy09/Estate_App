import mongoose, { Schema } from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

export default User
