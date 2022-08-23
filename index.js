const inquirer = require('inquirer');
// const { viewDepartment, addDepartment } = require('./helpers/department');
// const { viewRole, addRole } = require('./helpers/role');
const mysql = require('mysql2');
// const { viewEmployee, addEmployee } = require('./helpers/employee');
// Connect to database - syntax from \UPENN-VIRT-FSF-FT-07-2022-U-LOLC\12-SQL\01-Activities\21-Ins_Prepared-Statements\server.js
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Iamgroot',
      database: 'company_db'
    },
);

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
                case 'view all departments':
                    viewDepartment();
                    // menu();
                    break;
                case 'view all roles':
                    viewRole();
                    // menu();
                    break;
                case 'view all employees':
                    viewEmployee();
                    // menu();
                    break;
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
                // case 'update':
                //     menu();
                //     break;
            };
        });
}   


function viewDepartment () {
    db.query(`SELECT * FROM department;`, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            menu ();
        }
    });
}

// Shout out to Freddy Kwak who is in my study group and helped me understand this
// particularly the syntax on line 29
function addDepartment () {
    return inquirer
    .prompt(
        {
            type: 'input',
            name: 'name',
            message: 'Departement Name:',
        }, 
    ).then((data) => {
        db.query(`INSERT INTO department (name) VALUES (?);`, data.name, function (err) {
            if (err) {
                console.error(err);
            } else
            console.log('Success');
            menu ();
        });
    }); 
};


function viewRole () {
    db.query(`SELECT * FROM role;`, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            menu ();
        }
    });
}

function addRole () {
    // SELECT * FROM department in query - what you get back needs to be choices
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Salary:',
        },
        {
            type: 'list',
            name: 'department',
            message: 'Department:',
            // choices: 
        }
    ]).then((data) => {
        // If i don't keep track of department_id - based on department selected may need to do another select statement 
        // SELECT FROM department WHERE name === data.department and insert into data.newdata
        db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`, [data.title, data.salary, data.department], function (err) {
            if (err) {
                console.error(err);
            } else
            console.log('Success');
            menu ();
        });
    });
}

function viewEmployee () {
    db.query(`SELECT * FROM employee;`, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            menu ();
        }
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
        db.query(`INSERT INTO employee (first_name, last_name) VALUES (?, ?);`, [data.first_name, data.last_name], function (err) {
            if (err) {
                console.error(err);
            } else
            console.log('Success');
            menu ();
        });
    });
}

menu ();