import {Router} from 'express'
const router = Router()
import { getUsers, createUser, updateUser, deleteUser, getUniqueUser } from '../controller/users.controller.js'
router.get('/users', getUsers) // obtiene todos los datos de TODOS los usuarios 
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:username', deleteUser)
router.get('/users/:username', getUniqueUser) // obtienes  los datos de UN  usuario


export default router