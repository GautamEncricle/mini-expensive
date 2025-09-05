import * as authService from '../services/auth.service.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/AppError.js'

export const register = catchAsync(async (req, res) => {
  const { name, email, password } = req.body
  const user = await authService.signup({ name, email, password })
  if (!user) {
    throw new AppError('User registration failed', 500)
  }
  res.status(201).json({ user })
})

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body
  const token = await authService.login({ email, password })
  if (!token) {
    throw new AppError('Login failed', 500)
  }
  res.status(200).json({ token })
})
