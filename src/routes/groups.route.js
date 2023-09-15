// esta funcion obtiene la lista de grupos, contenidos y adicionales (basico)
import {Router} from 'express'
const router = Router()
import { createUniqueGroup, deleteGroupById, getAllGroupsList, getUniqueGroupById, renameUniqueGroupById } from '../controller/groups.controller.js'
//router.get('/posts', getUsers) // obtiene todos los datos de TODOS los usuarios 
router.post('/groups', createUniqueGroup)
router.get('/groups', getAllGroupsList)
router.get('/groups/:groupId', getUniqueGroupById)
router.put('/groups/:groupId', renameUniqueGroupById)
router.delete('/groups/:groupId', deleteGroupById)

export default router