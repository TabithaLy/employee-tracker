const inquirer = require('inquirer');
const mysql = require('mysql2');

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
            switch (response.menu) {
                case 'view all departments':
                    menu();
                    break;
                case 'view all roles':
                    menu();
                    break;
                case 'view all employees':
                    menu();
                    break;
                case 'add a department':
                    menu();
                    break;
                case 'add a role':
                    menu();
                    break;
                case 'add an employee':
                    menu();
                    break;
                case 'update':
                    menu();
                    break;
            }
        });
}   

menu ();