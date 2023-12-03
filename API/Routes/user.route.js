import express from 'express'
import { testfun } from '../controllers/user.controller.js'

const UserRouter = express.Router()

UserRouter.get('/test', testfun)

export default UserRouter
