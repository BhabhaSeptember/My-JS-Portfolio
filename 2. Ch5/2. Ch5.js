//todo: EDIT 

/* Fetching elements by their ID */

/* getElementByID */
document.getElementById("shopName").innerHTML = "Tracy's Crotchet Hub";

let selection1;
let selection2;
let selection3;

// /* Changing list using button (html.23) */

document.getElementById("changeList").onclick = newList;

function newList() {
    selection1 = prompt("Enter an item to search: ");
    selection2 = prompt("Enter an item to search: ");
    selection3 = prompt("Enter an item to search: ");
    updateList();
}


function updateList() {
    document.getElementById("item1").innerHTML = selection1;
    document.getElementById("item2").innerHTML = selection2;
    document.getElementById("item3").innerHTML = selection3;
}
