import express from 'express'
import {
  createExpense,
  fetchExpensesByGroupId,
} from '../../controllers/expenses.controller.js'
import { isAuthenticated } from '../../middlewares/auth.middleware.js'
const router = express.Router()

router.post('/', isAuthenticated, createExpense)
router.get('/:groupId', isAuthenticated, fetchExpensesByGroupId)
export default router
