function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("t");
    console.log("h");
    console.log("o");
    console.log("d");
    
    
}
// sayMyName()

// function addTwoNumber(number1 , number2) {
//     console.log(number1 + number2);
    
// }
// addTwoNumber(3 , 7)

function addTwoNumber(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(5,7)

// console.log("Result : ",result);


function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("Rathod"))
// console.log(loginUserMessage())

function calculateCartPrice(val1 , val2 ,...num1) {
    return num1  
}
console.log(calculateCartPrice(200 , 400 , 600 , 2000))


const user ={
    username : "Rathod",
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) 
handleObject({
    username: "shyam",
    price: 400
}) 

const myNewArray = [200,400,600]

function returnSecondValue(getArray) {
    return getArray[0]
    
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,900]));

