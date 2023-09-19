// THE URL FOR CREATE THE OG:IMAGE FILE

import {Router} from 'express'
const router = Router()
import OGImage from '../controller/OGImage.controller.js'
//router.get('/posts', getUsers) // obtiene todos los datos de TODOS los usuarios 
router.get('/og_img', OGImage)
export default router