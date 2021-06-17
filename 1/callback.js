/*function a(){
    console.log("A");
}
*/
var b = function (){
    console.log("B");
}

function slowfunc(callback){
    callback();
}
slowfunc(b);