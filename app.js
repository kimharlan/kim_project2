// from data.js
var tableData = d3.csv ("yelp_ca_brewery_final.csv");
console.log(tableData);
tbody = d3.select("table")


function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

function clickSelect(){
    
    d3.event.preventDefault();
    
    console.log(dateInputText.property("value"));
    
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
   
    displayData(new_table);
}


dateInputText.on("change", clickSelect)

