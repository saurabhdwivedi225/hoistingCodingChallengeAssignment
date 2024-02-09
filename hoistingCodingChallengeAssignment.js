//1.  Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demostrate hoisting.

// Solution :- 
// Calling function before declaration demonstrating hoisting  
console.log(addNumbers(25,30)); //55

function addNumbers(number1,number2){
    return number1 + number2;
}


// 2. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

// Solution :- 

multiplyNumbers(55,5); /* ReferenceError: multiplyNumbers is not defined
because function expression and class expression  are not hoisted in js */
const func = function multiplyNumbers(num1,num2) {
return num1*num2;
}


// 3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

// Solution :- 

function myFunction(numbr1,numbr2){
    console.log(sum); //undefined
    var sum;
    sum = numbr1 + numbr2
    return sum;
}
console.log(myFunction(1,1)) 
/*Output :-  undefined
              2 */


// 4. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

// Solution :- 

{
    console.log(var1); //throws Reference Error
    let var1 = 50;
    console.log(var1);

    console.log(var2); //throws Reference Error
    const var2 = 60;
    console.log(var2);

    console.log(var3); // undefined due to hoisting
    var var3 = 70;
    console.log(var3);

    // Js only hoists declaration not initialization 
    // Keyword var is hoisted and let and const does not allow hoisting 
}


// 5. Declare a variable using the let inside a block scope and attempt to log its value to the console before it is asssigned a value to demostrate the temporal dead zone.

// Solution :- 

{
 //myVariable Temporal dead zone(TDZ) starts here ...
 //myVariable TDZ continues here 
console.log(myVariable);//ReferenceError: Cannot access 'myVariable' before initialization because myVariable TDZ continues here 
let myVariable = "Saurabh Dwivedi"; // myVariable TDZ ends here.
}
// A block's TDZ starts at the begining of the block's local scope. It ends when the computer fully initializes your variables with a value 