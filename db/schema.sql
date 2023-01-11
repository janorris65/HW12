DROP DATABASE IF EXISTS fakecompany1_2023_db;
CREATE DATABASE fakecompany1_2023_db;

USE fakecompany1_2023_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE employees (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_id)
  REFERENCES role(id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id)
  REFERENCES employees(id),
  ON DELETE SET NULL,
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2),
  CONSTRAINT fk_department FOREIGN KEY (department_id)
  REFERENCES department(id),
);
