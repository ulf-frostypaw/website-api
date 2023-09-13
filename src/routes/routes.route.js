import express from "express"
import { config } from'dotenv'
config();
import usersRouter from './users.route.js'
const app = express()
app.use(usersRouter)
const api_version = process.env.VITE_API_VERSION
app.get('/', (req, res) => {
    res.json({"message": "Te damos la bienvenida a la API de furries.network", "url": "https://furries.network", "API_VERSION": api_version})

})
export default app