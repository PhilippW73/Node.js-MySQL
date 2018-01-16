var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_1"
});

connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
});

function checkId() {
    inquirer.prompt([
        {
          name: "productId",
          type: "input",
          message: "Please enter the ID of the product that you would like to buy!"
        },
      ])
      .then(function(answer) {
        var query = `SELECT stock_quantity FROM products WHERE item_id=${answer.productId}`;
            connection.query(query, function(err, results){  
            if (err) {
              return console.log("Error: ", err);
            }
            var stock_quantity = results[0].stock_quantity;
            var selectedProduct = answer.productID;

            quantity(stock_quantity);
            
            
            }) 
      });
};

function quantity(stock_quantity) {
  inquirer.prompt([
    {name: "quantity",
    type: "input",
    message: "Please enter the quantity"
    },
  ])
    .then(function(answer){
      if(answer.quantity > stock_quantity) {
        console.log("Sorry, insufficient stock")
      } else {
          console.log("Thanks");
          var newQuantity = stock_quantity - answer.quantity
          console.log(newQuantity);
          updateProduct()
        };
      });
  };


// function updateProduct() {
//   console.log("Updating all quantities\n");
//   var query = "UPDATE products SET ? WHERE ?";
//   UPDATE products SET stock_quantity = '[updated-value]' WHERE item_id = ;

//   connection.query(query, { stock_quantity: answer.artist }, function(err, results){
//       printInfo(results);
    
//     function(error) {
//               if (error) throw err;
//               var totalCost = (parseInt(answer.quantity) * result.price);
//               console.log("Order placed successfully!");
//               console.log("Total Cost: " + totalCost);
//               start();
//             }
//   );

function updateProduct(newQuantity, selectedProduct, stock_quantity) {
  console.log("Updating all quantities\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newQuantity
      },
      {
        item_id: selectedProduct
      }
    ],
    function(err, res) {
      console.log(stock_quantity);
    }
  );

  // logs the actual query being run
  //console.log(query.sql);
}



checkId();
//quantity();


















//         // query the database for all ID's
//   connection.query("SELECT * FROM products", function(err, results) {
//     if (err) throw err;
//     // once you have the ID's, promp


//         checkId();
// 	      	id: function() {		
// 	            var idArray = [];
// 	            for (var i = 0; i < results.length; i++) {
// 	              idArray.push(results[i].item_id);
// 	            }
// 	            return idArray;

// 	        	var chosenID = result.productId;

// 		        if(chosenID === idArray[i]) {
// 		        	inquirer
// 		        		.prompt([
// 		        			{
// 		        				name: "quantity",
// 		        				type: "confirm",
// 		        				message: "Please enter the amount of units that you would like to buy!"
// 		        			};
// 		        		])
// 		        		.then(function(answer){
// 		        			readProducts();
// 		        		})
// 		        }
// 		        else {
// 		        	console.log("Wrong ID. Please re-enter ID or call customer support for help");
// 		        	checkId();
// 		        };
// 	    	};
// 	    });
//   });
// };

// function readProducts() {
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;

//     if (result.stock_quantity >= parseInt(answer.quantity)) {
//     	updateProduct();
//     }
//     else {
//     	console.log("Insufficient quantity");
//     	console.log("Please chose another product");
//     	checkId();
//     }    
//   });
// }

// function updateProduct() {
//   console.log("Updating all quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         stock_quantity: (result.stock_quantity - answer.quantity)
//       },
//     ],
//     function(error) {
//               if (error) throw err;
//               var totalCost = (parseInt(answer.quantity) * result.price);
//               console.log("Order placed successfully!");
//               console.log("Total Cost: " + totalCost);
//               start();
//             }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }
// checkId();
// readProducts();
// updateProduct();
// // show total costs for customer

