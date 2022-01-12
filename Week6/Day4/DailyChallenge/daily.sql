-- CREATE TABLE orders(
-- 	order_id SERIAL PRIMARY KEY,
-- 	customer_name VARCHAR (30),
-- item_id integer REFERENCES items(item_id)
-- );
	
-- CREATE TABLE items(
-- 	item_id SERIAL PRIMARY KEY,
-- 	name VARCHAR (40),
-- 	price integer
-- );

-- INSERT INTO orders (customer_name, item_id)
-- VALUES ('Jacob', 1),
-- ('Jacob', 1),
-- ('Jacob', 3),
-- ('Jacob', 5),
-- ('Noam',4),
-- ('Noam',4),
-- ('Tamara',2),
-- ('Tamara',6),
-- ('Tamara',1),
-- ('Tamara',5),
-- ('Maya',3),
-- ('Natalie',3),
-- ('Natalie',1),
-- ('Natalie',5)


-- INSERT INTO items(name, price)
-- VALUES ('bed', 25),
-- ('pillow', 10),
-- ('sheets', 15),
-- ('cover', 30),
-- ('night light', 33),
-- ('lightbulb', 5)

-- CREATE OR REPLACE FUNCTION new_bill(nm VARCHAR (30))
-- RETURNS INTEGER AS
-- $$
-- DECLARE 
-- 	bill_price INTEGER;
-- BEGIN
-- 	SELECT SUM(items.price) AS bill FROM orders
-- 	INNER JOIN items ON items.item_id = orders.item_id
-- 	WHERE orders.customer_name = nm
-- 	INTO bill_price;
-- 	RETURN bill_price;
-- END;
-- $$
-- LANGUAGE 'plpgsql'

SELECT new_bill('Jacob')