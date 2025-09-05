import express from 'express'
import userRouter from './router/auth.routes.js'
import groupRouter from './router/group.routes.js'
import expenseRouter from './router/expense.routes.js'

const router = express.Router()

router.use('/auth', userRouter)
router.use('/groups', groupRouter)
router.use('/expense', expenseRouter)

export default router
