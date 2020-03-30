// from data.js
var tableData = data;

// populating the table

d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td>
    <td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });


var button = d3.select("#filter-btn");

button.on("click", function(){
  
    var input = d3.select("#datetime").property("value");
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");
    var td, i, txtValue;
    
    // for loop for filtering and execution

   for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(input)>-1){
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
   }
 // clear input value by using onfocus (within html input <>)
       
});

    
    








//   var inputfield = d3.select("#datetime").on("input",myFilterFunction);
//   var button = d3.select("#filter-btn");

// //   function handleClick(){
// //     console.log(inputfield)

// function myFilterFunction(){
//     console.log("Hi there!")


// }





// //   }

//   button.on("click", function() {
//     console.log(inputfield)
//   });

  // function handlesubmit() {
    // Input Date Value
    // var chosen_date = d3.select("datetime").node().value();
    // console.log(chosen_date);

    // Button Activation

    // Build Table Filter
    // var sighting_button = d3.select("")

    // clear the input value
    // d3.select("datetime").node().value = "";






  
