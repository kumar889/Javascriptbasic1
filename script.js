var orderTotal = 0;



function collectorder(numOrdered){
    if (numOrdered>0){
        alert("you ordered " + orderTotal);
        orderTotal = numOrdered *8;
    }
    return  orderTotal;
}
var total = collectorder(8);
console.log(total);