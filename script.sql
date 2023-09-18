CREATE DATABASE ecommerce;
\c ecommerce;

CREATE TABLE categories (
    id SERIAL NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE items (
    id SERIAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    category_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) 
        REFERENCES categories(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

INSERT INTO categories (name) VALUES ('fruits');
INSERT INTO categories (name) VALUES ('vegetables');

INSERT INTO items (name, price, description) VALUES ('Banana', 18.75, 'A bunch of yellow bananas');
INSERT INTO items (name, price, description) VALUES ('Strawberry', 70.99, 'Fresh strawberries');
INSERT INTO items (name, price, description) VALUES ('Celery', 5.00, 'A sprig of celery');

SELECT * FROM categories;

SELECT name, price FROM items;

SELECT * FROM items WHERE name = 'Banana';

SELECT * FROM items WHERE price > 10;

UPDATE items SET category_id = 1 WHERE name = 'Banana';
UPDATE items SET category_id = 1 WHERE name = 'Strawberry';
UPDATE items SET category_id = 2 WHERE name = 'Celery';

DELETE FROM items WHERE name = 'Strawberry';
SELECT * FROM items;

SELECT c.name, i.name, i.description 
FROM categories c 
JOIN items i
ON i.category_id = c.id; 