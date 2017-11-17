/*This program allows the user to select items to add to their shopping list. It prints the itemized shopping list and total to the console.*/

var itemArray = [];
var priceArray = [];

function addItem(itemNumber){
  var item = document.getElementById("shoppingList").elements.namedItem("item" +              itemNumber).value;
  itemArray.push(item);
  
  var price = document.getElementById("shoppingList").elements.namedItem("price"    +         itemNumber).value;
  priceArray.push(price * 1);
}

function printList(){
  var count = 0;
  var sum = 0;
  for (i = 0; i < itemArray.length; i++) {
    console.log(itemArray[i] + " " + priceArray[i]);
    sum += priceArray[i];
    count++;
  }
  console.log("Item Count: " + count + " Total: " + sum);
}