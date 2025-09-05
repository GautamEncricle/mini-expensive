import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import AppError from './AppError.js'
import catchAsync from './catchAsync'

const getUserByToken = catchAsync(async (token) => {
  if (!token) throw new AppError('No token provided', 401)
  const decoded = jwt.verify(token, process.env.JWT_SECRET || 'jsonsecretkey')
  const user = await User.findById(decoded.id)
  return user
})

export default getUserByToken
