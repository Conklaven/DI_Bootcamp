-- ALTER TABLE actors ADD COLUMN salary integer;
-- ALTER TABLE actors ADD COLUMN nationality VARCHAR (25);
-- SELECT * FROM actors;

-- UPDATE actors
-- SET salary = 100000
-- WHERE 
-- number_oscars > 5
-- -- RETURNING *;
-- SELECT * FROM actors;

-- UPDATE actors
-- SET salary = 50000
-- WHERE
-- number_oscars <=5
-- RETURNING *;

-- SELECT * FROM actors;

-- UPDATE actors
-- SET number_oscars = number_oscars+1
-- WHERE first_name ='Matt' AND last_name='Damon'
-- RETURNING *;

-- UPDATE actors
-- SET nationality = 'American'
-- RETURNING *;

-- UPDATE actors
-- SET  salary = 100000*number_oscars
-- WHERE actor_id IN (1,2) 
-- RETURNING *;

-- SELECT * FROM actors;

-- UPDATE actors 
-- SET first_name = 'Maty'
-- WHERE first_name = 'Matt'
-- RETURNING *;

-- SELECT * FROM actors;
-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars, salary, nationality)
-- VALUES ('George', 'Clooney', '1953-12-24',8,300000, 'American');

-- UPDATE actors
-- SET number_oscars = 4
-- WHERE first_name = 'George' AND last_name = 'Clooney'
-- RETURNING *;

-- DELETE FROM actors
-- WHERE last_name = 'Obama'
-- RETURNING *;

-- SELECT AVG(number_oscars) FROM actors;
-- SELECT DISTINCT number_oscars FROM actors;
-- SELECT first_name, last_name FROM actors WHERE date_birth > '1970-01-01';
-- SELECT first_name, last_name FROM actors WHERE first_name = 'David' OR first_name = 'Morgan' OR  first_name ='Will';


