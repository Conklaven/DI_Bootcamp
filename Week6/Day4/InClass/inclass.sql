-- SELECT * FROM actors;

-- CREATE FUNCTION oscar_count (fn VARCHAR (40), lan VARCHAR (40))
-- RETURNS integer
-- language plpgsql
-- AS
-- $$
-- DECLARE countofoscar integer;
-- BEGIN
-- SELECT number_oscars FROM actors Where actors.first_name = fn AND actors.last_name = lan 
-- INTO countofoscar;
-- RETURN countofoscar;
-- END;
-- $$

-- SELECT oscar_count('Selena', 'Gomez')

-- ALTER TABLE actors
-- ADD COLUMN new_salary integer DEFAULT 0

-- UPDATE actors
-- SET new_salary = 5000

-- CREATE OR REPLACE FUNCTION update_salary (sal integer, fn VARCHAR (30), lan VARCHAR (30))
-- RETURNS integer
-- language plpgsql
-- AS
-- $$
-- DECLARE
-- newsal integer;
-- BEGIN 
-- UPDATE actors 
-- SET new_salary = sal * number_oscars
-- WHERE first_name = fn AND last_name = lan
-- RETURNING new_salary INTO newsal;
-- RETURN newsal;
-- END;
-- $$


SELECT update_salary(10000, 'Selena', 'Gomez')
