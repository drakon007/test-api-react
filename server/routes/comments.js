import { Router } from 'express'
const router = new Router()
import { checkAuth } from '../utils/checkAuth.js'
import { createComment } from '../controllers/comments.js'

// Create Comment
// http://localhost:3000/api/comments/:id
router.post('/:id',checkAuth, createComment)

export default router
