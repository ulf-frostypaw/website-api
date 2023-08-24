import {Sequelize} from 'sequelize'
import { config } from'dotenv'
config();
const sequelize = new Sequelize(process.env.VITE_DATABASE_NAME, process.env.VITE_DATABASE_USER, process.env.VITE_DATABASE_PASSWORD, {
  host: process.env.VITE_DATABASE_HOST,
  dialect: 'mysql',
});

export default sequelize