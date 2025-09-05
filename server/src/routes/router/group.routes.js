import express from 'express'
import {
  createNewGroup,
  fetchGroupById,
} from '../../controllers/group.controller.js'
import { isAuthenticated } from '../../middlewares/auth.middleware'

const router = express.Router()

router.post('/', isAuthenticated, createNewGroup)
router.get('/:groupId', isAuthenticated, fetchGroupById)

export default router
