import express from 'express'
import {
  createExpense,
  fetchExpensesByGroupId,
} from '../../controllers/expenses.controller.js'
const router = express.Router()
import { isAuthenticated } from '../../middlewares/auth.middleware.js'

router.post('/', isAuthenticated, createExpense)
router.get('/:groupId', isAuthenticated, fetchExpensesByGroupId)
export default router
