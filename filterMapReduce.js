// Import data from data.json
const data = require("./data.json")

// Function for filtering specific author from the data
function filter(data, author){
    // .filter is used to filter an array with a specific condition and return the array result 
    return data.filter(book => book.author === author)
}

// Function for map array that return the book price multiplied by 2
function map(data){
    // .map is used to executes callback on every element within it, returning a new array with all of the values that the callback returned
    return data.map(book => book.price*2)
}

// Function to reduce the array into one element by adding every mapped price
function reduce(data){
    // .reduce will takes all element and reduce it into single element by doing a specific operation
    return data.reduce((a, b) => a + b)
}

// Filtered array that consist of books that is written by author "JRR Tolkien"
const filterData = filter(data, "JRR Tolkien")

// Mapped array that consist of prices of books that is written by author "JRR Tolkien" that has been multiplied by 2 
const mapData = map(filterData)

// Reduced array that contain the sum of prices of books that is written by author "JRR Tolkien" that has been multiplied by 2
const reduceData = reduce(mapData)

console.log(filterData)
console.log(mapData)
console.log(reduceData)