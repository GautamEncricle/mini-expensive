import Group from '../models/Group.js'
import AppError from '../utils/AppError.js'
import catchAsync from '../utils/catchAsync.js'

export const createGroup = catchAsync(async ({ name, members }) => {
  const group = await Group.create({ name, members })
  return group
})

export const getGroupById = catchAsync(async (groupId) => {
  const group = await Group.findById(groupId).populate('members', 'name email')
  if (!group) {
    throw new AppError('Group not found', 404)
  }
  return group
})
