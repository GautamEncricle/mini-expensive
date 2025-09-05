import * as authService from '../services/auth.service.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/AppError.js'

export const register = catchAsync(async (req, res) => {
  const { name, email, password } = req.body
  const token = await authService.signup({ name, email, password })
  if (!token) {
    throw new AppError('User registration failed', 500)
  }
  res.cookie('token', token, { httpOnly: true })
  res.status(201).json({ message: 'User registered successfully', name, email })
})

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body
  const token = await authService.login({ email, password })
  if (!token) {
    throw new AppError('Login failed', 500)
  }
  res.cookie('token', token, { httpOnly: true })
  res.status(200).json({ token })
})

export const fetchAllUsers = catchAsync(async (req, res) => {
  const users = await authService.getAllUsers()
  res.status(200).json({ users })
})
