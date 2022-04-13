var str = 'divyansh';
var arr= str.split('');
console.log(arr);
lastIndex = str.length - 1 // 7, 6
function reverseString(str){
    let reversedString = '';
    let reversedArr = [];
    for(let i=lastIndex; i>=0; i--){ // 8 
        console.log(str[i]) // 7, h,6, s
        reversedArr.push(str[i]);
        reversedString = reversedString + str[i] // ''+ h => h + s => hs
    }
    return reversedArr;
}

// add => integer => 6 + 7 = 13
// concat => '6' + '7' => 67

console.log(reverseString(arr));

// recursion:- worst 
function fname(){
    fname();
}

// swapping: 

// largest no in arrray:

var numbers = [1,9,3,4,8, 10];
let large = numbers[2]; // 1 > 9 , largeest = 10 , second = 8
let secondlarge = numbers[1]; // 1 > 9 , largeest = 10 , second = 8
function getLargestNumber(numbers){
    for(let i=0; i<numbers.length; i++){
        if(large > numbers[i]){ // 3 > 9, 9 > 3, 9 > 4, 9 > 10

        }else{
            large = numbers[i] // 9, 10
            seonclarge = numbers[i] // 9, 10
        }
    }
    return [large, seonclarge];
}
console.log(getLargestNumber(numbers));

// 
var str1 = 'assdass';
// str[0] = z; // primitve 
let replacestr = '';
for(let i=0; i<str1.length; i++){
    if(str1[i] == 's'){
        replacestr = replacestr + 'z'; // az, az = az+ z => azz
    }else{
        replacestr = replacestr + str1[i] // azz+d azzda
    }
}

console.log(replacestr);


// logic for reverse a number:

1234/10 => 1000 + 234 => 200 + 34 => 30 + 4 => 0 +4
123/10 => 12.3
43
for(
    number[i]%10 => 4
    number/10
)