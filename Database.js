import {Sequelize} from 'sequelize';

const db = new Sequelize('Pizza_Web1',
'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db