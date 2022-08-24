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

// Menu prompt - copied syntax from my own previous challenge team profile 
// generator: https://github.com/TabithaLy/team-profile-generator/index.js
// starting options for application
function menu() {
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
            // switch case for options above
            switch (response.menu) {
                case 'view all departments':
                    viewDepartment();
                    break;
                case 'view all roles':
                    viewRole();
                    break;
                case 'view all employees':
                    viewEmployee();
                    break;
                case 'add a department':
                    addDepartment();
                    break;
                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                // work on at some later point
                // case 'update':
                //     menu();
                //     break;
            };
        });
}

// view function for department 
function viewDepartment() {
    db.query(`SELECT * FROM department;`, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            menu();
        }
    });
}

// ad function for department 
// Shout out to Freddy Kwak who is in my study group and helped me understand this
// particularly the syntax on line 29
function addDepartment() {
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
                menu();
            });
        });
};

// similar syntax for all view functions 
function viewRole() {
    db.query(`SELECT * FROM role;`, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            menu();
        }
    });
}

// similar syntax for all add functions 
function addRole() {
    // SELECT * FROM department in query - what you get back needs to be choices
    db.query(`SELECT name FROM department`, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log(results);
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
                        choices: results
                    }
                ]).then((data) => {
                    // pseudo-code -If i don't keep track of department_id - based on department selected may need to do another select statement 
                    db.query(`SELECT id FROM department WHERE name = ?`, data.department, (err, results) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log(results)
                            db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`, [data.title, data.salary, results[0].id], function (err) {
                                if (err) {
                                    console.error(err);
                                } else
                                    console.log('Success');
                                menu();
                            });
                        }
                    })
                });
        }
    });

}

function viewEmployee() {
    db.query(`SELECT * FROM employee;`, function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            menu();
        }
    });
}

function addEmployee() {
    db.query(`SELECT title FROM role`, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log(results);
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
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: 'Role:',
                        choices: results
                    }
                ]).then((data) => {
                    db.query(`SELECT id FROM role WHERE name = ?`, data.role, (err, results) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log(results)
                            db.query(`INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?);`, [data.first_name, data.last_name, results[0].id], function (err) {
                                if (err) {
                                    console.error(err);
                                } else
                                    console.log('Success');
                                menu();
                            });
                        }
                    });
                });
        }
    });
}
// call startup prompt
menu();