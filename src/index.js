import express from "express"
import { Router } from "express"
const app = express();
const router = Router();
import routes from "./routes/routes.route.js"
import sequelize from './config/database.js'
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
        app.listen(3000, () => {
          console.log(`Example app listening on port ${3000}`);
        });
        
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
main()