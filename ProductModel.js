import {Sequelize} from "sequelize";
import db from "./Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('pizzaproduct', {
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    qty:{
        type: DataTypes.INTEGER
    },
    alt:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Product