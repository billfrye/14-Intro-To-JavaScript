// from data.js the original, complete list.
var tableData = data;

function loadTableData(tableData) {
    var table = d3.select("#ufo-table"); 
    var tbody = table.select("tbody");
    tbody.html(null);
    var trow;
    tableData.forEach((ufo) => {
        trow = tbody.append("tr");
        trow.append("td").text(ufo.datetime);
        trow.append("td").text(ufo.city);
        trow.append("td").text(ufo.state)
        trow.append("td").text(ufo.country);
        trow.append("td").text(ufo.shape);
        trow.append("td").text(ufo.durationMinutes);
        trow.append("td").text(ufo.comments);
    });
    console.log('Loaded: ' + tableData.length)
}

function filterByDate(filterDate,tableData) {
    var filtered = tableData.filter(function( row ) {
        return( filterDate === row.datetime )
    })
    return filtered;
}

// var resetFilter = d3.select("#reset_btn");

// resetFilter.on("click", function() {
//     tableData = loadTableData(data);
// });

// Select the submit button
var submit = d3.select("#filter-btn");

// handle the entry of a date for filtering.
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // the date filter followed by loadTableData to
  // display the filter data.

  console.log("filter date: " + inputValue);
  tableData = filterByDate(inputValue,tableData);

  tableData = loadTableData(tableData);
});


function ready() {
    console.log("Dom is ready, load data!");
    loadTableData(tableData);   
  }

document.addEventListener("DOMContentLoaded", ready);

