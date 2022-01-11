-- CREATE TABLE customer (
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (20) NOT NULL,
-- last_name VARCHAR (30) NOT NULL);

-- CREATE TABLE customer_profile (
-- profile_is SERIAL PRIMARY KEY,
-- address_number smallint, 
-- address_street VARCHAR (60),
-- city VARCHAR (45),
-- country VARCHAR (40),
-- customer_id integer REFERENCES customer(customer_id) ON DELETE CASCADE
-- )

-- INSERT INTO customer (first_name, last_name)
-- VALUES ('Jacob', 'Klaven'),
-- ('Natalie', 'Klaven'),
-- ('Barry', 'Cohen'),
-- ('Noam', 'Klaven');

-- INSERT INTO customer_profile (address_number, address_street, city, country, customer_id)
-- VALUES (19, 'Daniel', 'Bat Yam', 'Israel', (SELECT customer_id FROM customer WHERE first_name = 'Barry')),
-- (264, 'Colegrove', 'Memphis', 'USA', (SELECT customer_id FROM customer WHERE first_name = 'Natalie')),
-- (1344, 'Glenrock', 'St. Louis', 'USA', (SELECT customer_id FROM customer WHERE first_name = 'Jacob')),
-- (264, 'Colegrove', 'Memphis', 'USA', (SELECT customer_id FROM customer WHERE first_name = 'Noam'))

-- INNER
-- SELECT * 
-- FROM customer 
-- INNER JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id


-- -- Right
-- SELECT * 
-- FROM customer 
-- Right JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id

-- Left
-- SELECT * 
-- FROM customer 
-- left JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id

-- FULL
-- SELECT * 
-- FROM customer 
-- FULL JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id

-- PART 2

-- CREATE TABLE product (
-- product_id SERIAL PRIMARY KEY,
-- name VARCHAR (35) NOT NULL);

-- CREATE TABLE customer_order(
-- product_id integer NOT NULL REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- customer_id integer NOT NULL REFERENCES customer(customer_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- PRIMARY KEY (customer_id, product_id)
-- )	

-- SELECT * FROM product
-- INSERT INTO product (name)
-- VALUES ('tv'),
-- ('car'),
-- ('washer'),
-- ('bed')

-- INSERT INTO customer_order (product_id, customer_id)
-- VALUES ((SELECT product_id FROM product WHERE name = 'tv'), (SELECT customer_id FROM customer WHERE first_name = 'Jacob')),
-- ((SELECT product_id FROM product WHERE name = 'car'), (SELECT customer_id FROM customer WHERE first_name = 'Noam')),
-- ((SELECT product_id FROM product WHERE name = 'washer'), (SELECT customer_id FROM customer WHERE first_name = 'Natalie'))

-- INNER
-- SELECT first_name, last_name, name 
-- FROM customer_order 
-- INNER JOIN customer ON customer.customer_id = customer_order.customer_id
-- INNER JOIN product ON product.product_id = customer_order.product_id



-- -- Right
-- SELECT first_name, last_name, name 
-- FROM customer_order 
-- RIGHT JOIN customer ON customer.customer_id = customer_order.customer_id
-- RIGHT JOIN product ON product.product_id = customer_order.product_id

-- Left
-- SELECT first_name, last_name, name 
-- FROM customer_order 
-- LEFT JOIN customer ON customer.customer_id = customer_order.customer_id
-- LEFT JOIN product ON product.product_id = customer_order.product_id

-- FULL
SELECT first_name, last_name, name 
FROM customer_order 
FULL JOIN customer ON customer.customer_id = customer_order.customer_id
FULL JOIN product ON product.product_id = customer_order.product_id

