-- 1
-- SELECT name FROM language;
-- 2
-- SELECT film.title, film.description, language.name 
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id;

-- SELECT film.title, film.description, language.name 
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id;

-- SELECT film.title, film.description, language.name 
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id;

-- 3
-- CREATE TABLE new_film (
-- film_id SERIAL PRIMARY KEY,
-- film_name VARCHAR (50)
-- );

-- INSERT INTO new_film (film_name)
-- VALUES ('I Robot'),
-- ('WALL-E'),
-- ('Luca'),
-- ('Moana');

-- 4
-- CREATE TABLE customer_review (
-- review_id SERIAL PRIMARY KEY NOT NULL,
-- film_id integer REFERENCES new_film(film_id) ON DELETE CASCADE,
-- language_id integer REFERENCES language(language_id) ON DELETE CASCADE,
-- 	title VARCHAR (50),
-- 	score smallint, 
-- 	review_text text,
-- 	last_update date
-- )

-- INSERT INTO customer_review ( film_id, language_id, title, score,review_text, last_update)
-- VALUES ((SELECT film_id FROM new_film WHERE film_name = 'Luca'), (SELECT language_id FROM language WHERE name = 'English'), 
-- 	   'great family film', 8, 'the film is a wonderful watch from start to finish. It was the first film my kids saw in a theater and when we got home they wanted to already watch it again!', '2022-11-01'),
-- 	   ((SELECT film_id FROM new_film WHERE film_name = 'Moana'), 
-- 		(SELECT language_id FROM language WHERE name = 'English'), 
-- 	   'fun family film', 
-- 		9, 
-- 		'great film that teaches kids especailly girls to face thier fears and go for it!', 
-- 		'2022-11-01');

-- SELECT film_name, score, title, review_text
-- FROM customer_review AS cr
-- INNER JOIN new_film ON new_film.film_id = cr.film_id
-- INNER JOIN language ON language.language_id = cr.language_id;

-- DELETE FROM new_film WHERE film_name = 'Luca';

-- SELECT * FROM customer_review; 


-- EXERCISE 2
-- UPDATE customer_review 
-- SET language_id = (SELECT language_id FROM language WHERE name = 'French')
-- WHERE film_id = (SELECT film_id FROM new_film WHERE film_name = 'Moana')

-- 2. Customer address we will need to do a subquery to get this data
-- 3.
-- DROP TABLE customer_review;
-- was easy becuase it was a child table

-- -- 4
-- SELECT COUNT(*)
-- FROM inventory
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film ON film.film_id = inventory.film_id
-- WHERE rental.return_date IS NULL

-- 5
-- SELECT title
-- FROM inventory
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film ON film.film_id = inventory.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY rental_rate DESC LIMIT 30;

-- 6
-- 1
-- SELECT title
-- FROM film_actor
-- INNER JOIN film ON  film.film_id = film_actor.film_id
-- INNER JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND description ILIKE '%sumo%'

-- 2

-- SELECT title 
-- FROM film_category AS fm
-- INNER JOIN film ON film.film_id = fm.film_id
-- INNER JOIN category ON category.category_id = fm.category_id
-- WHERE fm.category_ID = (SELECT category_id FROM category WHERE name ILIKE 'documentary') AND length < 60 AND rating = 'R'

-- 3
-- SELECT film.title
-- FROM payment
-- INNER JOIN rental ON  rental.rental_ID = payment.rental_id
-- INNER JOIN customer ON payment.customer_id = customer.customer_id
-- INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN film ON film.film_id = inventory.film_id
-- WHERE customer.customer_id = (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name ='Mahan') AND amount >4 AND return_date BETWEEN '2005-07-28' AND '2005-08-01'

-- 4
-- SELECT film.title
-- FROM payment
-- INNER JOIN rental ON  rental.rental_ID = payment.rental_id
-- INNER JOIN customer ON payment.customer_id = customer.customer_id
-- INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN film ON film.film_id = inventory.film_id
-- WHERE customer.customer_id = (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name ='Mahan') AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY replacement_cost DESC LIMIT 1


