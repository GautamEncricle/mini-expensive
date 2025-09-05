import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import AppError from '../utils/AppError.js'

const JWT_SECRET = process.env.JWT_SECRET || 'jsonsecretkey'

export const signup = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email })
  if (existingUser) throw new AppError('Email already in use', 400)
  const user = await User.create({ name, email, password })
  return user
}

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email })
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Invalid credentials', 401)
  }
  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: process.env.JSON_EXPIRE || '1d',
  })
  return token
}
