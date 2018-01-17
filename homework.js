
CREATE DATABASE bamazon_1;
USE bamazon_1;
CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
  );



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
