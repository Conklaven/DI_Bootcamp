-- SELECT item FROM items ORDER BY price ASC;

-- SELECT item FROM items WHERE price >= 80 ORDER BY price ASC;

-- SELECT first_name, last_name FROM customers ORDER BY first_name ASC Limit 3;

-- SELECT last_name FROM customers ORDER BY last_name DESC;


-- CREATE TABLE purchases (
-- customer_id integer REFERENCES customers(cust_id),
-- item_id integer REFERENCES items(item_id));

-- INSERT INTO purchases (customer_id)
-- VALUES ('1')

-- works becuase we didnt put a constraint

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES ('1','3'),
-- ('5','1'),
-- ('4','1'),
-- ('3','2'),
-- ('2','1');


-- SELECT * FROM purchases;
-- not really... just numbers. doesnt mean much 

-- SELECT purchases.customer_id, purchases.item_id, customers.first_name, customers.last_name FROM purchases 
-- INNER JOIN customers
-- ON purchases.customer_id = customers.cust_id;

-- SELECT * FROM items;

-- SELECT items.item, purchases.item_id FROM items
-- INNER JOIN purchases
-- ON items.item_id = purchases.item_id
-- WHERE items.item_id = 1 OR items.item_id = 2;


-- SELECT items.item, purchases.item_id, customers.first_name, customers.last_name FROM items
-- INNER JOIN purchases
-- INNER JOIN customers
-- -- ON items.item_id = purchases.item_id
-- ON purchases.customer_id = customers.cust_id;



-- PART 2

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
