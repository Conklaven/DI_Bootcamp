-- CREATE SEQUENCE id_sequence
-- start 10
-- increment 10;

-- CREATE TABLE department (
-- Deptcode INTEGER NOT NULL PRIMARY KEY default nextval('id_sequence'),
-- DeptName CHAR(30),
-- locale VARCHAR (33) UNIQUE);

-- CREATE TABLE employee(
-- EmpCode INTEGER PRIMARY KEY,
-- EmpFName VARCHAR (15) NOT NULL,
-- EmpLName VARCHAR (15) NOT NULL,
-- Job VARCHAR (45),
-- Manager CHAR (4),
-- 	HireDate Date,
-- 	Salary INTEGER DEFAULT 0,
-- 	Commission INTEGER,
-- 	Deptcode INTEGER REFERENCES department (Deptcode)
-- 	);


-- INSERT INTO DEPARTMENT (DeptName, locale)
-- VALUES ('FINANCE', 'EDINBURGH'),
--                               ('SOFTWARE','PADDINGTON'),
--                               ('SALES', 'MAIDSTONE'),
--                               ('MARKETING', 'DARLINGTON'),
--                               ('ADMIN', 'BIRMINGHAM');

-- INSERT INTO EMPLOYEE (EmpCode, EmpFName, EmpLName, Job, Manager, HireDate, Salary, Commission, Deptcode)
-- VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20),
--        (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),    
--        (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20),
--        (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
--        (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10),
--        (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20),
--        (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10),
--        (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30),
--        (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20),
--        (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20),
--        (9902, 'ANDREW', 'FAULKNER', 'ANAYLYST', 7566, '1981-12-03', 3000,0, 10),
--        (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20),
--        (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30),
--        (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30),
--        (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL),
--        (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50),
--        (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);

-- 1
-- SELECT COUNT(*) FROM employee WHERE Deptcode = 10;

-- 2
-- SELECT COUNT(*) FROM employee WHERE Deptcode = 10 AND job = 'ANALYST';

-- 3
-- SELECT employee.EmpFName, employee.EmpLName, department.locale 
-- FROM employee 
-- INNER JOIN department
-- ON employee.Deptcode = department.Deptcode; 

-- 4
-- SELECT AVG(salary) FROM employee WHERE Job ='SOFTWARE ENGINEER';

-- 5
-- left join

-- 6
-- SELECT employee.EmpFName, employee.EmpLName, employee.Deptcode, department.DeptName, department.locale
-- FROM employee
-- INNER JOIN department
-- ON employee.Deptcode = department.Deptcode;
-- 7
-- SELECT EmpFName, EmpLName, SUM(salary+commission) AS Total_Pay FROM employee GROUP BY EmpFName, EmpLName, salary, commission;
-- 8

-- SELECT salary FROM employee ORDER BY salary DESC LIMIT 1;



