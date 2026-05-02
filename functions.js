// function statement

function a(){
    console.log("function statement");
}
a()
// function Expression
var b= function c(){
    console.log("b");
}
b();
// Anonymus function- function without a name -but if we give like that we will get syntax error 
// so it can be passed as an value refer line no 24

//Named Function Expression- refer to function expression

//Difference between Parameters nd Arguements
function v(a,b){ // a and b are parameters
    console.log(a,b)
}
v(2,8);// 2 nd 8 are arguements


//First Class Functions- function can be passed as an arguement to another function and
function m(param1){
    console.log(param1);
}
function n(){   
}

m(n); //function n is passed as an arguement to another function

//can be passed function as a value to another function ,
 function e(param1){
    console.log(param1)
 }

 e(function d(){

 });



// can return function from another function
var c= function(param1){
     return function xyz(){

     }
}

console.log(c())





//Arrow Functions