DROP DATABASE IF EXISTS fakecompany_db;
CREATE DATABASE fakecompany_db;

USE fakecompany_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2),
  department_id INT,
  CONSTRAINT fk_department FOREIGN KEY (department_id)
  REFERENCES departments(id)
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  CONSTRAINT fk_role FOREIGN KEY (role_id)
  REFERENCES role(id),
  manager_id INT
  REFERENCES employees(id)
  ON DELETE SET NULL
);