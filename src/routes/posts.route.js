import {Router} from 'express'
const router = Router()
import { createPost, deletePost, getUniquePost, updatePost } from '../controller/posts.controller.js'
//router.get('/posts', getUsers) // obtiene todos los datos de TODOS los usuarios 
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)
router.get('/posts/:id', getUniquePost) // obtienes  los datos de UN  usuario


export default router