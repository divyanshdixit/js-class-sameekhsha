var arr = ['one', 'two', 3, 4];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3]);


for(let i=0; i<arr.length; i++){ // array
    console.log(i, arr[i]);
}
// for in => object
// for of => iterable

var n = [1,2,4,2,3,4,5,1]; 
[1], [2,4,2,3,4,5,1]
var arr1 = [];

// for(let i=0; i<n.length; i++){
//     if(n[i] == n[i+1]){ // 1 == 2
//         console.log(first)
//         arr1.push(n[i]);
//     }else{
//         console.log('duplicate no: ', n[i]);
//     }
// }

// split() => convert string to array;
// ['o','n','e']
for(let i=0; i<n.length; i++){
    // n[1] => 2
    for(let j=i+1; j<n.length; j++){
        if(n[i] == n[j]){ // 2==4
            arr1.push(n[i]); // splice(index, no of element to remove, elements to add)
            var v = n.splice(j,1)
            
        }
    }
}

console.log(n, v);
console.log(arr1);
// i, arr[i]
// remove the duplicate





// for(initialization, conditional, increment/decrement){

// }