-- CREATE TABLE Boss (
-- manager_ID SERIAL PRIMARY KEY,
-- manager_name VARCHAR (45),
-- manager_type VARCHAR (20),
-- dept_ID integer REFERENCES department(deptcode) UNIQUE
-- 	);

-- INSERT INTO boss (manager_name, manager_type, dept_ID)
-- VALUES ('Jacob','nice', 10),
-- ('Kim','friendly', 20),
-- ('Ido','rude', 30);

-- select * FROM department;

SELECT manager_name, manager_type 
FROM boss 
INNER JOIN department
ON dept_ID = deptcode 
WHERE dept_ID = (SELECT deptcode FROM department WHERE deptname = 'FINANCE');

-- SELECT * FROM Boss;