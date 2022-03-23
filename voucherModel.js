import {Sequelize} from "sequelize";
import db from "./Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('voucher', {
    code:{
        type: DataTypes.STRING
    },
    persentage:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});

export default Product