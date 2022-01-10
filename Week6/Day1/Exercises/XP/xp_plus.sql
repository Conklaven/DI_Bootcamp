-- CREATE TABLE students(
-- student_id SERIAL PRIMARY KEY,
-- last_name VARCHAR (20) NOT NULL,
-- first_name VARCHAR (20) NOT NULL,
-- birth_date DATE NOT NULL);

-- INSERT INTO students(last_name, first_name, birth_date)
-- VALUES ('Benichou','Marc','1998-11-02'),
-- ('Cohen','Marc','2010-12-03'),
-- ('Benichou','Yoan','1987-07-27'),
-- ('Dux','Amelia	','1996-04-07'),
-- ('Grez','David','2003-06-14'),
-- ('Simpson','Omer','1980-10-03');

-- INSERT INTO students(last_name, first_name, birth_date)
-- VALUES ('Klaven','Jacob','1985-06-28');

-- SELECT * FROM students;

-- SELECT first_name, last_name FROM students;

-- SELECT first_name, last_name FROM students WHERE student_id =2;

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

-- SELECT first_name, last_name FROM students WHERE student_id = 1 OR student_id = 3;

-- SELECT * FROM students WHERE birth_date >= '2000-01-01';