import express from "express"
import { config } from'dotenv'
config();
const app = express()
const api_version = process.env.VITE_API_VERSION
import usersRouter from './users.route.js'
import postsRouter from './posts.route.js'
import topicRouter from './topic.route.js'

app.use(usersRouter)
app.use(postsRouter)
app.use(topicRouter)

app.get('/', (req, res) => {
    res.json({"message": "Te damos la bienvenida a la API de furries.network", "url": "https://furries.network", "API_VERSION": api_version})
})
export default app