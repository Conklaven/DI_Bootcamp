-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )
-- Will create a table called FirstTab with 2 columns (id and name)

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')
-- -- WIll create 4 rows first three having both data and the last one only having a name

-- SELECT * FROM FirstTab 
-- -- will show all the data

-- CREATE TABLE SecondTab (
--     id integer 
-- )
-- -- create a new table with only one column

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)
-- -- will create two rows one having an id and the other being null


-- SELECT * FROM SecondTab 
-- -- will show all the rows form the secondTAb table

-- -- Q1. What will be the OUTPUT of the following statement? 1?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )


-- -- Q2. What will be the OUTPUT of the following statement? 2

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )


-- Q3. What will be the OUTPUT of the following statement? ?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )


-- Q4. What will be the OUTPUT of the following statement? 2

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )