import { createGroup, getGroupById } from '../services/group.service.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/AppError.js'

export const createNewGroup = catchAsync(async (req, res) => {
  const { name, members } = req.body
  const group = await createGroup({ name, members })
  res.status(201).json({ group })
})

export const fetchGroupById = catchAsync(async (req, res) => {
  const { groupId } = req.params
  const group = await getGroupById(groupId)
  res.status(200).json({ group })
})
