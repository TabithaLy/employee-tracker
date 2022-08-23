-- syntax from this modules miniproject
USE company_db;

INSERT INTO department (name)
VALUES ("Naruto"),
       ("HunterXHunter"),
       ("Made in Abyss");

INSERT INTO role (title, salary, department_id)
VALUES ("Ninja",100000,1),
       ("Akatsuki",100000,1),
       ("Hunter",200000,2),
       ("Delver",300000,3),
       ("Hollow",300000,3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Naruto","Uzumaki",1),
       ("Itachi","Uchiha",2),
       ("Gon","Freecss",3),
       ("Riko","Cave",4),
       ("Nanachi","Narehate",5);
