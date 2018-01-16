CREATE DATABASE bamaszon;

-- Makes it so all of the following code will affect bamaszon --
USE bamaszon;

-- Creates the table "people" within bamaszon --
CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10),
  );


INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("MacBook Air", "Electronics", 999, 100);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("iPhone", "Electronics", 400, 50);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("iWatch", "Electronics", 299, 250);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("Bose Headphones", "Electronics", 350, 75);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("Seagate External Harddisk", "Electronics", 1500, 100);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("iPad mini", "Electronics", 400, 100);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("iPad Keyboard", "Electronics", 100, 200);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("Sonos Speakers", "Electronics", 350, 20);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("Drone", "Electronics", 99, 100);

INSERT INTO products (product_name, department_name, price stock_quantity)
VALUES ("Canon Camero", "Electronics", 1999, 100);
