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
  overview();
});

console.log("\n")
console.log("***********************************************************************");
console.log("*********************** Welcome to Bamazon ****************************");
console.log("***********************************************************************\n");

function overview (){
  connection.query("SELECT * FROM products", function(err,results){
    for(var i=0; i<results.length; i++){
      console.log(results[i].item_id+" || "+results[i].product_name+" || "+
        results[i].department_name+" || "+results[i].price+" || "+results[i].stock_quantity+"\n");
    }
    checkId(results);
  })
};

function checkId(results) {
    inquirer.prompt([
        {
          name: "productId",
          type: "input",
          message: "Please enter the ID of the product that you would like to buy!\n"
        },
        {
          name: "quantity",
          type: "input",
          message: "Please enter the quantity\n"
        }]).then(function(answer) {
            
            var query = `SELECT * FROM products WHERE item_id=${answer.productId}`;
            //var query = `SELECT price FROM products WHERE item_id=${answer.productId}`;

            connection.query(query, function(err, results){ 
            //console.log(results); 
              var price = results[0].price;
              if (err) {
                return console.log("Error: ", err);
              }
              var stock_quantity = results[0].stock_quantity;
              var selectedProduct = answer.productId;
              
              //console.log("here is the price:........................" + price);

              if(answer.quantity > stock_quantity) {
                console.log("Sorry, insufficient stock")
                console.log("Available Quantity: " + stock_quantity)
                checkId();
              } else {
                  var newQuantity = stock_quantity - answer.quantity
                  //console.log(newQuantity);
            
                  var purchaseCost = parseInt(answer.quantity) * price;
                  //console.log("price......" + price);
                  //console.log("here is the cost:........................" + purchaseCost);

                  console.log('\n');
                  console.log("Thanks");
                  console.log("Your Purchase: ");
                  console.log("Product ID: " + answer.productId + "\t and \t" + "Quantity: " + answer.quantity);
                  console.log("Total Costs: " + purchaseCost);
                  console.log("\n")
                  console.log("Updatied quantities\n");
                  
                  connection.query("UPDATE products SET ? WHERE ?", 
                        [{
                          stock_quantity: newQuantity
                        }, 
                        {
                          item_id: selectedProduct
                        }], 

                          function(err, results) {
                          if (err) {
                          return console.log("Error: ", err);
                          }
                          //console.log("\n");
                          //console.log("Your purchase is $ " + purchaseCost + ". Would you like to buy something else?\n");
                          //console.log("\n");
                          overview();
                          }
                        );
                }
      });
  });
};
