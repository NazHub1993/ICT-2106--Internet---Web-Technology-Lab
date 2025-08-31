// var x = 23;
// var y = 12;
// console.log(x + y);
// document.writeln(x + y);


// var a = 12;
// var a = 13;
// document.writeln(a);

// let b = 16;
// document.writeln(b);

// let c = 14;
// let d = 34.675;
// let name = "Nasrin";
// document.writeln(typeof (c));
// document.writeln(typeof (d));
// document.writeln(typeof (name));


// let age1 = 25;
// age1 = age1.toString();
// document.writeln("</br>" + typeof (age1));



// let temp = "100";
// temp = parseInt(temp);
// document.writeln("</br>" + typeof (temp));


// let r = 5.6;
// r = Number(r);
// document.writeln("</br>" + typeof (r));
// console.log(r);


// let z = "9.7";
// z = parseFloat(z);
// console.log(z);
// document.writeln("</br>" + typeof (z));

// document.writeln("</br>" + Number("100"));
// document.writeln("</br>" + Number("ABCD"));

// let g = 1000.02;
// g.toFixed(3);
// console.log(g);
// g.toPrecision(2);
// console.log(g);



//User Input
// let studentFirstName = prompt("Enter your first name: ");
// let studentLastName = prompt("Enter your last name: ");
// document.writeln("</br><p style='color:blue; font-weight:bold;'>" + studentFirstName + " " + studentLastName + "</p>");





let num1 = prompt("Enter first num:");
let num2 = prompt("Enter second num: ");
let res = Number(num1) + Number(num2);
let res1 = Number(num1) - Number(num2);
let res2 = Number(num1) * Number(num2);
let res3 = Number(num1) / Number(num2);
document.writeln("<h1 style='color:red;'>" + "Addition: " + res + "</h1>")
document.writeln("<h1 style='color:blue;'>" + "Substraction: " + res1 + "</h1>")
document.writeln("<h1 style='color:black;'>" + "Multiply: " + res2 + "</h1>")
document.writeln("<h1 style='color:red;'>" + "Division " + res3 + "</h1>")

let areaRectangle = Number(num1) * Number(num2);
document.writeln("<h1 style='color:black;'>" + "Area Rectangle: " + areaRectangle + "</h1>")

let fahrenheit = num1;

let celsius = (fahrenheit - 32) * 5 / 9;
document.writeln("<h1 style='color:black;'>Celsius: " + celsius.toFixed(2) + "</h1>");








