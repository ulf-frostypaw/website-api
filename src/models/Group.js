import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Group = sequelize.define('Group', {
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
