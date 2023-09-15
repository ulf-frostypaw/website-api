// fetch all coments
import {Router} from 'express'
const router = Router()
import { getCommentsByPost, getUniqueCommentsByPost, deleteUniqueCommentByPost, submitUniqueCommentByPost} from '../controller/comments.controller.js'

router.get('/comments/:postId', getCommentsByPost)
router.get('/comments/:postId/:commentId', getUniqueCommentsByPost)
router.delete('/comments/:postId/:commentId', deleteUniqueCommentByPost)
router.post('/comments', submitUniqueCommentByPost)

export default router