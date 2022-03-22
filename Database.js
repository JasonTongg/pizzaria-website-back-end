import {Sequelize} from 'sequelize';

const db = new Sequelize('Pizza_Web', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db

// import {Sequelize} from 'sequelize';

// const db = new Sequelize('d61kdbh51p74cn', 'exseeluywxcola', '6bb3fd179d3639cb18ddb9d3ab453063ea5b42ca10a7c0d9533a720fd97f5a3a', {
//     host: "ec2-52-201-168-60.compute-1.amazonaws.com",
//     dialect: "postgres",
//     port: 5432,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// });

// export default db