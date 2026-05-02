

var x=1;
 a();
 b();
 console.log(x);


function a(){
  var x=10;
  console.log(x);
}

function b(){
    var x= 100;
    console.log(x);
}

console.log("Karthika Pournami");


const controller = new AbortController();
const signal = controller.signal;

fetch('https://dummyjson.com/products/1', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch request was canceled');
    } else {
      console.error('Fetch error:', err);
    }
  });

  controller.abort();












