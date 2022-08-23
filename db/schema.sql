DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- modified from \UPENN-VIRT-FSF-FT-07-2022-U-LOLC\12-SQL\01-Activities\20-Stu_Foreign-Primary-Key\Solved\db\schema.sql
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
-- Shout out to Voravich who is in my study group and whose repo 
-- helped me understand this
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
--   manager_id INT,
--   FOREIGN KEY (manager_id)
--   REFERENCES employee(id)
--   ON DELETE SET NULL
);

DESCRIBE department;
DESCRIBE role;
DESCRIBE employee;