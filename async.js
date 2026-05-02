//async await
//await can be used only inside async function
//async will return promise- even if you give string r number r boolean 
//it will wrap inside promise and will give result see below example

async function getData(){
    return "Shirdi SaiBaba"
}
//Saibaba will wrapped inside promise nd will give result 

const promise = getData();
console.log(promise);

//if we want only to display the output 
promise.then((res)=> console.log(res))
getData();

//another example
//creating a promise

const p1= new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved the Value");
    },10000)
    
})

//setTimeout(()=>{}, 1000) //syntax for setTimeout

async function Data(){
    const res = await p1;
    console.log("Namsthe SaiBaba")
    console.log(res)
    
}
Data();


