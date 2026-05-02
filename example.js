function x(){

}
console.log(x);
var a;
console.log(a);
function m(){
    var x=10;
    function n(){
        var y=20;
        console.log(x+y);
        var x=20;
        return function y(){
        }     
    }
    n()
}
m();