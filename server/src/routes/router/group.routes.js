import express from 'express'
import {
  createNewGroup,
  fetchGroupById,
} from '../../controllers/group.controller.js'

const router = express.Router()

router.post('/', createNewGroup)
router.get('/:groupId', fetchGroupById)

export default router
