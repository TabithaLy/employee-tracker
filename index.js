const inquirer = require('inquirer');
const { viewDepartment, addDepartment } = require('./helpers/department');
const { viewRole, addRole } = require('./helpers/role');
const { viewEmployee, addEmployee } = require('./helpers/employee');

// Menu prompt - copied syntax from my own previous challenge team profile 
// generator: https://github.com/TabithaLy/team-profile-generator/index.js
function menu () {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: ['view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update']
            },
        )
        .then(response => {
            // addDepartment();
            switch (response.menu) {
            //     case 'view all departments':
            //         // viewDepartment();
            //         // menu();
            //         break;
            //     case 'view all roles':
            //         // viewRole();
            //         // menu();
            //         break;
            //     case 'view all employees':
            //         // viewEmployee();
            //         menu();
            //         break;
                case 'add a department':
                    addDepartment();
                    // menu();
                    break;
                case 'add a role':
                    addRole();
                    // menu();
                    break;
                case 'add an employee':
                    addEmployee();
                    // menu();
                    break;
            //     case 'update':
            //         menu();
            //         break;
            }
        });
}   

menu ();