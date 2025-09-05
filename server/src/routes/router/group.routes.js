import express from 'express'
import {
  createNewGroup,
  fetchGroupById,
  fetchGroupsByUserId,
} from '../../controllers/group.controller.js'
import { isAuthenticated } from '../../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/', isAuthenticated, createNewGroup)
router.get('/:groupId', isAuthenticated, fetchGroupById)
router.get('/', isAuthenticated, fetchGroupsByUserId)

export default router
