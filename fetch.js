// Fetch is used to make request into a network and deliver the information into the webpage
// This fetch will take data from data.json and print all of the data inside the html page
fetch("./data.json")
.then(response => response.json())
.then(function(data) {
    for (var i=0; i<data.length; i++){
        document.getElementById("data").innerHTML += data[i].id + ", " + data[i].book + " is written by " + data[i].author + " , price = " + data[i].price + "<br/>"
    }
})