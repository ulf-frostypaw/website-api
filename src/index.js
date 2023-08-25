import express from "express"
import { Router } from "express"
const app = express();
const router = Router();
import routes from "./routes/routes.route.js"
import sequelize from './config/database.js'
import { config } from 'dotenv'
config()
// metodo principal
//import './models/User.js'
//import './models/Post.js'
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//app.use(express.text('utf-8'))
app.use('/v1', routes);
async function main(){
    try {
        await sequelize.sync({force: false}); // {force: true} - ONLY DEV MODE
        router.use((req, res) => {
            res.status(404).json({"errorMessage":{"title":"error 404","description":"Pagina no registrada en la API"}});
        })
        app.listen(process.env.VITE_APP_HOST, () => {
          console.log(`Example app listening on port ${process.env.VITE_APP_HOST}`); /// no mostrar en prod
        });
        
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
main()