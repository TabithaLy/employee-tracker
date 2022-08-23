const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database - syntax from \UPENN-VIRT-FSF-FT-07-2022-U-LOLC\12-SQL\01-Activities\21-Ins_Prepared-Statements\server.js
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Iamgroot',
      database: 'company_db'
    },
);


function viewEmployee () {
    db.query(`SELECT * FROM employee;`, function (err, results) {
        if (err) {
            console.error(err);
        }
        console.table(results);
    });
}

function addEmployee () {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'First Name:',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Last Name:',
        }
    ]).then((data) => {
        db.query(`INSERT INTO employee (first_name, last_name) VALUES ("", "");`, data.addEmployee, function (err) {
            if (err) {
                console.error(err);
            } else
            console.log('Success');
        });
    });
}

module.exports = {
    viewEmployee,
    addEmployee
}