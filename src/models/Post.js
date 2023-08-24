import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Post = sequelize.define('Post', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.STRING(5000),
        allowNull: true
    }
});
