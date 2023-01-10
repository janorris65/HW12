DROP DATABASE IF EXISTS fakecompany1_2023_db;
CREATE DATABASE fakecompany1_2023_db;

USE fakecompany1_2023_db;

CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  FOREIGN KEY (role_id),
  REFERENCES role(id),
  FOREIGN KEY (manager_id),
  REFERENCES employees(id),
);
