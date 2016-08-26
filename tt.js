console.log("javascript is working");

document.getElementById("generateTable").addEventListener("click", generateTable);


function generateTable() {
  //clear existing table
  var asd = document.getElementsByTagName("table");
  var table = asd[0];
  console.log(table);
  if (table) {
      table.parentNode.removeChild(table);
  }


  var body = document.getElementsByTagName("body")[0];
  //assign input to number
  var number = document.getElementById("input").value;
  // 1.create a table Element
  var tbl = document.createElement("table"); //create a table
  body.appendChild(tbl);
  //2. create row Element
   //create a row
  for(var i = 1; i <= number; i++){
    var row = document.createElement("tr");
    tbl.appendChild(row);
    //create cells
    for(var j = 1; j <= number; j++){
      var cells = document.createElement("td");
      cells.textContent = i * j
      row.appendChild(cells);
    }
  }
}
