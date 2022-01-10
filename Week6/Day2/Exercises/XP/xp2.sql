-- 1
-- SELECT * FROM customer;
-- 2
-- SELECT (first_name, last_name) AS full_name FROM customer;
-- 3
-- SELECT DISTINCT create_date FROM customer;
-- 4
-- SELECT * FROM customer ORDER BY first_name DESC;
-- 5
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;
-- 6
-- SELECT address, phone FROM address WHERE district = 'Texas';
-- 7
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150;
-- 8
-- SELECT * FROM film WHERE title ILIKE '%minority report%';
-- 9
-- SELECT * FROM film WHERE title ILIKE 'mi%';
-- 10
-- SELECT * FROM film ORDER BY  rental_rate ASC LIMIT 10;
-- 11
-- SELECT * FROM film ORDER BY  rental_rate ASC LIMIT 10 OFFSET 10;
-- 12
-- SELECT payment.amount, payment.payment_date, customer.first_name, customer.last_name
-- FROM payment
-- INNER JOIN customer
-- ON payment.customer_id = customer.customer_id;
-- 13

-- 14
SELECT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;