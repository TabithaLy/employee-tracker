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

// function viewRole () {
//     db.query(`SELECT * FROM role;`, function (err, results) {
//         if (err) {
//             console.error(err);
//         } else {
//             console.table(results);
//         }
//     });
// }

// function addRole () {
//     return inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: 'Title:',
//         },
//         {
//             type: 'input',
//             name: 'salary',
//             message: 'Salary:',
//         }
//     ]).then((data) => {
//         db.query(`INSERT INTO role (title, salary) VALUES ("", ?);`, data.addRole, function (err) {
//             if (err) {
//                 console.error(err);
//             } else
//             console.log('Success');
//         });
//     });
// }

// module.exports = {
//     viewRole,
//     addRole
// }