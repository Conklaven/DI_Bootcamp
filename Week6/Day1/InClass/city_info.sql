-- CREATE TABLE city_info (
-- 	event_datetime TIMESTAMP,
-- 	city VARCHAR (30) NOT NULL,
-- 	temperature DECIMAL,
-- 	light DECIMAL,
-- 	airquality_raw DECIMAL,
-- 	sound DECIMAL,
-- 	humidity DECIMAL,
-- 	dust DECIMAL);

-- ALTER TABLE city_info
-- DROP CONSTRAINT city_info_pkey;

-- COPY city_info (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) 
-- FROM '/Users/Public/city_info.csv' DELIMITER ',' CSV HEADER;

-- SELECT * FROM city_info;

-- Question 1   4711 rows

-- Question 2  3.08167688589856
-- SELECT * FROM city_info WHERE city = 'Boston' AND event_datetime = '2015-03-01 11:00:00';

-- Question 3 :
-- Select * FROM city_info WHERE temperature >= 28 AND temperature <= 30 AND city = 'San Francisco';

-- Question 4: Geneva on 14/3/2015 2144.xxxx
-- SELECT city, event_datetime, sound FROM city_info ORDER BY sound DESC LIMIT 1;

-- Question 5: Boston 7/3/2015 938.xxx
-- SELECT city, event_datetime, sound FROM city_info ORDER BY sound ASC LIMIT 1;

-- Question 6 
-- SELECT dust FROM city_info WHERE EXTRACT (DAY from event_datetime) = '26' AND EXTRACT (HOUR FROM event_datetime) >= '20' AND city = 'San Francisco';

-- Question 7
-- SELECT event_datetime FROM city_info WHERE city = 'Geneva' AND humidity >60 OR city = 'Geneva' AND humidity <40;

-- Question 8 
-- SELECT * FROM city_info WHERE EXTRACT(DOW)

-- Question 9
-- SELECT * FROM city_info WHERE city ILIKE 'S%';





