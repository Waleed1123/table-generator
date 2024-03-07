var input = document.getElementById("input");
var tableOutput = document.getElementById("tableOutput");

// Function
function table() {
  tableOutput.innerHTML = "";
  var value = input.value;
  for (var i = 1; i <= 10; i++) {
    tableOutput.innerHTML += `<li>${value} x ${i} = ${value * i}</li>`;

    // console.log(`${value} x ${i} = ${value * i}`);
  }
  input.value = "";
}
