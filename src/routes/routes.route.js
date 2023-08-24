import express from "express"
import usersRouter from './users.route.js'
const app = express()
app.use(usersRouter)
app.get('/', (req, res) => {
    res.send("Hellow world")

})
export default app