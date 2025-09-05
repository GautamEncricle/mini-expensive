import express from 'express'
import {
  register,
  login,
  fetchAllUsers,
} from '../../controllers/auth.controller.js'
import { isAuthenticated } from '../../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/users', isAuthenticated, fetchAllUsers)
router.get('/me', isAuthenticated, (req, res) => {
  res.status(200).json({ user: req.user })
})

export default router
