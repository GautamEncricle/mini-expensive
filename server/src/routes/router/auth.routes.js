import express from 'express'
import { register, login } from '../../controllers/auth.controller.js'
import { getUser } from '../../utils/getUserByRequest'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/me', getUser, (req, res) => {
  res.status(200).json({
    status: 'success',
    user: req.user,
  })
})

export default router
