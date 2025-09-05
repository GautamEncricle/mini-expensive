import {
  addExpense,
  getExpensesByGroupId,
} from '../services/expenses.service.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/AppError.js'

export const createExpense = catchAsync(async (req, res) => {
  const { amount, paidBy, groupId } = req.body
  const expense = await addExpense({ amount, paidBy, groupId })
  if (!expense) {
    throw new AppError('Expense creation failed', 500)
  }
  res.status(201).json({ expense })
})

export const fetchExpensesByGroupId = catchAsync(async (req, res) => {
  const { groupId } = req.params
  const expenses = await getExpensesByGroupId(groupId)
  res.status(200).json({ expenses })
})
