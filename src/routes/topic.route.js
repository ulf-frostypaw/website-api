// TOPICS / TRENDING ROUTE
import {Router} from 'express'
const router = Router()
import { getTopics, getUniqueTopics  } from '../controller/topics.controller.js'
//router.get('/posts', getUsers) // obtiene todos los datos de TODOS los usuarios 
router.get('/topics', getTopics)
router.get('/posts/:name', getUniqueTopics) // obtienes  los datos de UN  usuario


export default router