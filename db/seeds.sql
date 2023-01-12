INSERT INTO departments (id,name)
VALUES (1,"Dept of Fun"),
       (2,"Dept of Happy"),
       (3,"Dept of Great Times"),
       (4,"Dept of Long Walks"),
       (5,"Dept of Songs");

INSERT INTO role (id,title, salary, department_id)
VALUES (1,"Department Director", 10.00,1),
       (2,"Assistant Director", 8.00,1),
       (3,"Administrator", 6.00,1),
       (4,"Foundling", 4.00,1);

INSERT INTO employees (id,first_name,last_name, role_id, manager_id)
VALUES (1,"John","Smith",2,2),
       (2,"Jane","Smith",1,NULL),
       (3,"Dan","Smith",2,2),
       (4,"Bill","Spooty",3,3),
       (5,"Reginald","Heginald",3,1),
       (6,"Fats","Domino",3,3),
       (7,"Sugar","Bewild",4,6),
       (8,"Tony","Thepony",4,6),
       (9,"Tammy","Loami",4,6);