function deleteRow(e) {
    // var row = e.parentNode.parentNode
    var row = e.closest("tr")
    row.remove(row)
    console.log(row);
    
}

var span = document.getElementById("num");
var count = Number(span.innerText);

console.log(num ,count );

function ince(){
    count = count + 1
    console.log(count);
    span.innerText=count
}

function dece(){
    count = count - 1
    console.log(count);
    span.innerText=count
}