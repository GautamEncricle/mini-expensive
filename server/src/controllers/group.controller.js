import {
  createGroup,
  getGroupById,
  getGroupByUserId,
} from '../services/group.service.js'
import catchAsync from '../utils/catchAsync.js'
import Group from '../models/Group.js'

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

export const fetchGroupsByUserId = catchAsync(async (req, res) => {
  const userId = req.user._id
  const groups = await Group.find({ members: userId }).populate(
    'members',
    'name email'
  )
  res.status(200).json({ groups })
})
