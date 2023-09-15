import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Comment = sequelize.define('Comment', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    commentId:{
        type: DataTypes.STRING(200), // no exceder el limite de 200
    },
    userId: { // gets by the session saved in local storage
        type: DataTypes.INTEGER
    },
    postId:{
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.STRING(1000), // los strings no puede superar la longitud de más de 1000 caracteres
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER(2),
        allowNull: true
    }
});
