CREATE TABLE emp (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(45) DEFAULT NULL,
  employee_code varchar(45) DEFAULT NULL,
  salary int DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO emp
(id,name,employee_code,salary)
VALUES
(1, 'Aditya', 'EMP101', 70000),
(2, 'Gaurav', 'EMP102', 80000),
(3, 'Rushikesh','EMP103', 60000),
(4, 'Jayesh', 'EMP104', 100000);