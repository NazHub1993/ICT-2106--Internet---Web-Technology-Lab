var paraId = document.querySelector('#paraId');
function addStyle()
{
    var paraId = document.querySelector('#paraId');
    paraId.style.color = "purple"
    paraId.style.fontSize = "3rem"
    paraId.style.fontWeight = "bold";
    paraId.style.fontStyle="italic"
}
function removeStyle() {
    var paraId = document.querySelector('#paraId');
    paraId.style = " ";
}

//better Approach
function addStyle()
{
    paraId.classList.add("para-style")
}
function removeStyle()
{
    paraId.classList = "";
}
function next() {
    location.href="templates/next.html"
}
function back()
{
    location.href = "../index.html";
}

//add Event Listener
// var addButton = document.querySelector('#addButton');
// addButton.addEventListener("click", addStyle)

// function addStyle() {
//     var paraId = document.querySelector('#paraId')
//     paraId.classList.toggle("para-style")
// }

// var removeButton = document.querySelector('#removeButton');
// removeButton.addEventListener("click", removeStyle)

// function removeStyle() {
//     var paraId = document.querySelector('#paraId')
//     paraId.classList = "";
// }


// var button = document.querySelector('#addButton');
// button.addEventListener("click", function (a, b) {


//     var paraId = document.querySelector('#paraId')
//     paraId.innerHTML = (a + b)
//  } (1, 3));




const names = ['Hello', 'Jellow', 'Fellow'];
for (let name of names) {
    document.writeln(name);
}

let person = {
    id: 1,
    name: "Mehrin Anannya"
}

for (let x in person) {
    document.writeln("</br>" + x + " " + person[x]);
}

var numbers = [1, 2, 3, 4];

numbers.forEach(
    function (x) {
        document.writeln(x + "</br>")
    }
)

const display = () => {
    return "Hello There"
}
document.writeln(display());

add = (a, b) =>
    document.writeln("Add:" + (a + b))
add(1, 2);

//arrow function
//filter  function
//map function

const addButton = document.getElementById("addButton")
const removeButton=document.getElementById("removeButton")
addButton.addEventListener('click', () => {
    showDiv.classList.add("style");
})
removeButton.addEventListener('click', () => {
    showDiv.classList.remove("style");
})
