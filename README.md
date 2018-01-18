# Node.js-MySQL

## Files:		
* bamazonCustomer_1.js (file to start bamazon in terminal)"
* homework.js
		
		
## Json:  		
* package-lock.json
* package.json


## Technologies used:
* npm inquirer
* npm mysql


## Print Screens

![Screenshot 1](/Desktop/Rutgers/Node.js_MySQL/Node.js-MySQL/images/PS1.png)
Format: ![Alt Text](url)

![Screenshot 2](/Desktop/Rutgers/Node.js_MySQL/Node.js-MySQL/images/PS1.png)
Format: ![Alt Text](url)

## How it works

* (1) the app works like amazon or any other internet shop. the user is able to chose a product and order the item
* (2) the user can access the app via terminal. enter --> node bamazonCustomer_1.js
* (3) in this example, the user sees 10 products with item_id, product_name, department and stock_quantity
* (4) the user will be asked to chose an id from a product and then enter the requested quantity (see PS1.png)
* (5) the user can only order when the quantity on stock is bigger than the requested quantity
* (6) once the user inputed the requested information, the purchase is confirmed and the stock quantity is updated (see PS2)

## Instructions

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
