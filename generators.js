//Generators r functions which we can pause and resume

// function* generator(){
//  try {
//       yield 1;
//     yield 2;
//     yield 3;
//     } finally {
//         yield 'cleanup in finally block'
//     }
    

// }

// let gen = generator();
// console.log(gen);
// console.log(gen.next()); //output {value:1,done:false} -done means whether whole execution is done r not 
// console.log(gen.return('execution completed'));// return method we can stop execution 
// console.log(gen.next())//if we run after return method it wont execute
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function *numbers(){
    try{
      yield 1;
      yield 2;
    } catch(e) {
        console.error('Caught error:', e)
       
    }
    yield 3;
}

let gen1 = numbers();
console.log(gen1.next());
console.log(gen1.throw (new Error("Exception raised")));
console.log(gen1.next())