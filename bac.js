// 1) number
var num1 = 5;

var num2 = 10;

var res = num1 + num2;

// 2) string
var valStr = '5';

// 3) boolean
var result = 5 > 6;

// 4) underfined
var resValue;

// 5) null

var resValue2 = null;

// 6) Object array
var names =['vasya', 'vanya', 'alexiy'];

// 6) Object object
var user = {name: 'Vasa', age: 25, email: '@'};

console.log(user.name);







var num1 = +prompt('input num1');
var num2 = +prompt('input num2');

var result = num1 + num2;



 if (result && result !== 10) {

    alert(result);
} 
else if (result === 10) {
      alert('result 10');
}

else {
    alert('value shouls be number');
}
           
var a = 5;
var b = 4;



            //6   //6    //5
var result = ++a + a++ - ++b;

console.log(result) 



function sum (a, b) {
    var res = a + b;

    return res;
}    

var res = sum(4, 5);    //9
var res2 = sum(4, 10);  //14