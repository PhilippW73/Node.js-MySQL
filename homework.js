
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10)
  );



DROP DATABASE IF EXISTS greatbuy_db;
CREATE DATABASE greatbuy_db;
USE greatbuy_db;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(50),
  minBid INTEGER(10),
  category VARCHAR(50),
  PRIMARY KEY (id)
);


INSERT INTO products (name, minBid, category)
VALUES ("MacBook Air", 500, "Electronics");

INSERT INTO products (name, minBid, category)
VALUES ("iPhone X", 400, "Electronics");


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Air", "Computers", 999, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Computers", 400, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iWatch", "Computers", 299, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose Headphones", "Electronics", 350, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Seagate External Harddisk", "Computers", 1500, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad mini", "Computers", 400, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad Keyboard", "Computers", 100, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sonos Speakers", "Computers", 350, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drone", "Toys", 99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canon Camera", "Photo", 1999, 100);
