const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database - syntax from \UPENN-VIRT-FSF-FT-07-2022-U-LOLC\12-SQL\01-Activities\21-Ins_Prepared-Statements\server.js
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Iamgroot',
      database: 'company_db'
    },
);

viewDepartment = () => {

}

function addDepartment () {
    return inquirer
    .prompt(
        {
            type: 'input',
            name: 'name',
            message: 'Departement Name:',
        }, 
    ); 
}

module.exports = {
    viewDepartment,
    addDepartment
}