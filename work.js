

let s=document.getElementById("text")
s.onkeypress = wrapper;
let counter=0;
let timer;
function wrapper(){
    clearInterval(timer);
    timer=setTimeout(debounce,3000)
}


function debounce(){
    console.log("called" , ++counter)
}

setTimeout(()=>{
    console.log("timeout called after 3 seconds")
},1000)

// let timeoutId = setTimeout(() => {
//     console.log("This message will not appear if cleared.");
//   }, 3000);
  
//   // Later, to cancel the timeout:
//   clearTimeout(timeoutId);
  

let arr = [4,2,3,9,51];



console.log(arr.splice(2,1,5,6));// output - [3]
console.log(arr);//output-[4,2,5,6,9,51]
console.log(arr.splice(2,0,7));
console.log(arr); //output-[4,2,7,5,6,9,51]

//if we want to add element from right side then we need to give -4,-3,-2,-1

console.log(arr.splice(-2,1,{number:8}))
console.log(arr);


consol















