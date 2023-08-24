import {Router} from 'express'
const router = Router()
import { getUsers, createUser } from '../controller/users.controller.js'
router.get('/users', getUsers) // obtiene todos los datos de TODOS los usuarios 
router.post('/users', createUser)
router.put('/users/:username')
router.delete('/users/:username')
router.get('/users/:username') // obtienes  los datos de UN  usuario


export default router