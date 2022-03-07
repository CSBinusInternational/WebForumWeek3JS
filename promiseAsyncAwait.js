const x = true; // Try changing this to false

// Promise is an object that will return the result of an operation which is either resolved or rejected
function testPromise(){
    // A promise that will resolve if x is True and reject if x is NOT True
    return new Promise((resolve, reject) => {
        if(x){
            resolve("This is True")
        }
        else{
            reject("This is False")
        }
    })
}

// Async is to check the funtion to return a promise while await is used to wait the execution until the promise is resolved and only work with async function
async function testAsync(){
    // Try resolving the promise and if resolved, print the response
    try{
        const response = await testPromise()
        console.log("The success message is: " + response)
    }
    // Print the response if the promise is rejected
    catch (error){
        console.log("The error message is: " + error)
    }
}
testAsync()