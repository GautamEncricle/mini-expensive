import express from 'express'
import {
  createExpense,
  fetchExpensesByGroupId,
} from '../../controllers/expenses.controller.js'
const router = express.Router()

router.post('/', createExpense)
router.get('/:groupId', fetchExpensesByGroupId)
export default router
