-- CREATE TABLE emp (
--   id int NOT NULL AUTO_INCREMENT,
--   name varchar(45) DEFAULT NULL,
--   employee_code varchar(45) DEFAULT NULL,
--   salary int DEFAULT NULL,
--   PRIMARY KEY (id)
-- ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- INSERT INTO emp
-- (id,name,employee_code,salary)
-- VALUES
-- (1, 'Aditya', 'EMP101', 70000),
-- (2, 'Gaurav', 'EMP102', 80000),
-- (3, 'Rushikesh','EMP103', 60000),
-- (4, 'Jayesh', 'EMP104', 100000);


CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_emp_add_or_edit`(
IN _id INT,
IN _name VARCHAR(45),
IN _employee_code VARCHAR(45),
IN _salary INT

)
BEGIN
	IF _id = 0 THEN
		INSERT INTO emp(name,employee_code,salary)
		VALUES (_name,_employee_code,_salary);
        
	ELSE
		UPDATE emp
        SET name = _name,
		employee_code = _employee_code,
        salary = _salary
        WHERE id = _id;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END