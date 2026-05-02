setTimeout(function(){
  console.log("Timer")
},5000)

function a(b){
    console.log("x")
    b();
}
a(function b(){
  console.log("y")
})


function x(m,n){
  let sum;
  sum=m+n
  console.log(sum)

}
x(2,3)
 
