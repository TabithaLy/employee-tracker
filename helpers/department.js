// const inquirer = require('inquirer');
// const mysql = require('mysql2');


// // Connect to database - syntax from \UPENN-VIRT-FSF-FT-07-2022-U-LOLC\12-SQL\01-Activities\21-Ins_Prepared-Statements\server.js
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'Iamgroot',
//       database: 'company_db'
//     },
// );

// function viewDepartment () {
//     db.query(`SELECT * FROM department;`, function (err, results) {
//         if (err) {
//             console.error(err);
//         } else {
//             console.table(results);
//         }
//     });
// }

// // Shout out to Freddy Kwak who is in my study group and helped me understand this
// // particularly the syntax on line 29
// function addDepartment () {
//     return inquirer
//     .prompt(
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Departement Name:',
//         }, 
//     ).then((data) => {
//         db.query(`INSERT INTO department (name) VALUES ("");`, data.addDepartment, function (err) {
//             if (err) {
//                 console.error(err);
//             } else
//             console.log('Success');
//         });
//     }); 
// };

// module.exports = {
//     viewDepartment,
//     addDepartment
// }