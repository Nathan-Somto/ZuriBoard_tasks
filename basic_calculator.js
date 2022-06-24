const a =  parseFloat(prompt("enter a number : "));
let op = prompt("enter a operation "); 
const b = parseFloat(prompt("enter a number : ")); 
var result;
switch(op){
    case "+":
        result= a+b;
        break;
    case"-":
        result=a-b;
        break;
    case "*":
        result =a*b;
        break;
    case "/":
        result=(b===0)?b/a:a/b;
        break;
    default:
        console.log("check your operator ");
}
console.log("the result is given as : ",result);