var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function checkId() {
  // query the database for all ID's
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the ID's, prompt the user to enter the ID of the product that they'd like to buy
    inquirer
      .prompt([
        {
          name: "productId",
          type: "confirm",
          message: "Please enter the ID of the product that you would like to buy!"
        },
      ])
      .then(function(answer) {

	      	id: function() {		
	            var idArray = [];
	            for (var i = 0; i < results.length; i++) {
	              idArray.push(results[i].item_id);
	            }
	            return idArray;

	        	var chosenID = result.productId;

		        if(chosenID === idArray[i]) {
		        	inquirer
		        		.prompt([
		        			{
		        				name: "quantity",
		        				type: "confirm",
		        				message: "Please enter the amount of units that you would like to buy!"
		        			};
		        		])
		        		.then(function(answer){
		        			readProducts();
		        		})
		        }
		        else {
		        	console.log("Wrong ID. Please re-enter ID or call customer support for help");
		        	checkId();
		        };
	    	};
	    });
  });
};

function readProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    if (result.stock_quantity >= parseInt(answer.quantity)) {
    	updateProduct();
    }
    else {
    	console.log("Insufficient quantity");
    	console.log("Please chose another product");
    	checkId();
    }    
  });
}

function updateProduct() {
  console.log("Updating all quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: (result.stock_quantity - answer.quantity)
      },
    ],
    function(error) {
              if (error) throw err;
              var totalCost = (parseInt(answer.quantity) * result.price);
              console.log("Order placed successfully!");
              console.log("Total Cost: " + totalCost);
              start();
            }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// show total costs for customer

