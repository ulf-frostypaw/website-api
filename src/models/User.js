import { DataTypes } from 'sequelize' // SON LOS TIPOS DE FORMATOS QUE SOPORTA LA BASE DE DATOS
import sequelize from '../config/database.js'
import {Post} from './Post.js'
export const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{ // this create the ID
        type: DataTypes.INTEGER
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

User.hasMany(Post,{
    foreingKey: 'userId',
    sourceKey: 'id'
})
Post.belongsTo(User, {
    foreingKey: 'userId',
    targetId: 'id'
})