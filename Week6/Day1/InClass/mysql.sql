-- CREATE TABLE actors(
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (20) NOT NULL,
-- last_name VARCHAR (25) NOT NULL,
-- date_birth DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Matt', 'Damon', '1985-06-28', 6);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Jennifer', 'Aniston', '1970-10-05', 3);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- 	('Michelle', 'Obama', '1968-10-25', 6),
-- 	('Selena', 'Gomez', '1999-06-28', 3);

-- SELECT * FROM actors;

-- SELECT lower(first_name), last_name, date_birth FROM actors WHERE number_oscars>4;

-- SELECT upper(first_name), last_name, date_birth FROM actors WHERE EXTRACT(YEAR FROM date_birth) BETWEEN 1960 and 1971;
-- SELECT upper(first_name), last_name, date_birth FROM actors WHERE EXTRACT(YEAR FROM date_birth) NOT BETWEEN 1960 and 1971;


-- SELECT * FROM actors ORDER BY number_oscars DESC;

-- SELECT * FROM actors;

-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 2;
-- SELECT * FROM actors WHERE first_name LIKE '%e%';
SELECT * FROM actors WHERE number_oscars>5;


