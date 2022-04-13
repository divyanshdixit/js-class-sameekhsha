console.log(window.functionNames())

function functionNames(x,y){
    console.log('function', this)
    return [];
} // window

{/* <button onclick="functionName(this)">Click</button> */}
const functionName = (x,y) => {
    console.log('arrow function' , this)
}

console.log(functionName())
var i = 10; // window
console.log(window.i)

var obj = {
    name:'sadas'
}


console.log(obj.name)