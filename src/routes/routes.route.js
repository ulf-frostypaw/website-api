import express from "express"
import usersRouter from './users.route.js'
const app = express()
app.use(usersRouter)
app.get('/', (req, res) => {
    res.json({"message": "Te damos la vienvenida a la API de furries.network", "url": "https://furries.network"})

})
export default app