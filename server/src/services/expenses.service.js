import Expenses from '../models/Expenses.js'
import Group from '../models/Group.js'
import AppError from '../utils/AppError.js'

export const addExpense = async ({ amount, paidBy, groupId }) => {
  const group = await Group.findById(groupId)
  if (!group) {
    throw new AppError('Group not found')
  }
  const members = group.members
  if (!members.includes(paidBy)) {
    throw new AppError('Payer is not a member of the group')
  }
  const splitAmount = amount / members.length
  const expense = await Expenses.create({
    amount,
    paidBy,
    groupId,
    description: '',
    splitAmount: splitAmount,
  })
  return expense
}

export const getExpensesByGroupId = async (groupId) => {
  const expenses = await Expenses.find({ groupId })
    .populate('paidBy', 'name email')
    .populate('members', 'name email')
  return expenses
}

export const getGroupByMemberId = async (memberId) => {
  const groups = await Group.find({ members: memberId }).populate(
    'members',
    'name email'
  )
  return groups
}
