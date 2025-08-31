// var a = Number(prompt("What is the number?"));
let a = 13;
// if (a > 10) {
//     document.writeln("A is greater than 10");
// }
// else {
//     document.writeln("A is less then or equal to 10");
// }
(a > 10)
    ? ((a == 12)
        ? document.writeln("A is equal to 12")
        : document.writeln("A is greater than 10 but not equal to 12"))
    : document.writeln("A is less than or equal to 10");

let b = 59;
function cube(a) {
    return a * a * a;
}
function multiply(a, b) {
    return a * b;
}
function square(a) {
    document.writeln("</br><span style='color: red;'>" + "Square: " + a * a + "</span>");
    document.writeln("</br><span style='color: red;'>" + "Cube: " + cube(a) + "</span>");
}
square(a);
function area(a, b) {
    document.writeln("");
    document.write("</br> Area: ")
    document.writeln("</br><span style='color: red; font-weight:bold'>" + multiply(a, b) + "</span>");
}
area(a, b);

let m = 24;
(function square(m) {
    document.writeln("</br><span style='color: red;'>" + "Square: " + m * m + "</span>");
    document.writeln("</br><span style='color: red;'>" + "Cube: " + cube(m) + "</span>");
}

)(m);
let names = ['Meghla', "Sumaiya", "Sadika"];
document.writeln("</br><span style='color:blue;'>" + names + "</span>")


let firstName = new Array();
firstName[0] = "Love"
firstName[1] = "Dove"
document.writeln("</br><span style='color:blue;'>" + firstName + "</span>")

let firstArray = new Array();
let secondArray = new Array();
firstArray[0] = "Asad"
firstArray[1] = "Asif"
firstArray[2] = 12
secondArray[0] = "Shanti"
secondArray[1] = "Shefali"
document.writeln("</br>")
document.writeln(firstArray.concat(secondArray));
document.writeln("</br>")
document.writeln(firstArray);

document.writeln("</br>")
document.writeln("Without comma");
for (let i = 0; i < 3; i++) {
    document.writeln("</br>")
    document.writeln(firstArray[i]);
}
firstArray.push("Baby Megh");
document.writeln("</br>")
document.writeln(firstArray);
document.writeln("</br>")

firstArray.pop();
document.writeln(firstArray);


firstArray.shift();
document.writeln("</br>")
document.writeln(firstArray);


firstArray.unshift("AAA");
document.writeln("</br>")
document.writeln(firstArray);



firstArray.splice(1, 2)
document.writeln("</br>")
document.writeln(firstArray);

firstArray.splice(1, 0, "BBBBBBBBBBBBBBBB")
document.writeln("</br>")
document.writeln(firstArray);

firstArray.splice(0, 0, "Bush")
document.writeln("</br>")
document.writeln(firstArray);

let ThirdArray = new Array();
ThirdArray.push("Jellow");
ThirdArray.push("Jellow");
ThirdArray.push("Jellow");
ThirdArray.push("Jellow");
ThirdArray.push("Jellow");
document.writeln(ThirdArray[1]);
ThirdArray.splice(1, 2);
ThirdArray.splice(1, 2, "Gellogy", "Dellow");


let v = [32, 45, 78];
v.sort();
document.writeln("</br>")
document.writeln(v);


//sorting numbers
let d = [1230000000, 125499999, 12000000];
d.sort(function (a, b) {
    return a - b;
})
document.writeln("</br>")
document.writeln(d);

document.writeln("</br>")
document.writeln("</br>")


let array2D = [[1, 'A'], [3, 'B'],[4,'C']]
for (let i = 0; i < 3; i++)
{
    for (let j = 0; j < 2; j++)
    {
        document.writeln(array2D[i][j]);
    }
    document.writeln("</br>")

}





