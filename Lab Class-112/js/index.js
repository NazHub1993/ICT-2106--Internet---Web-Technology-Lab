function buttonClick1()
{
    alert('Hello Dear')
}
function paraClick() {
    var text = document.getElementById('paraID');
    text.innerHTML = 'This is second text of the para';
}
function paraClick1() {
    var text = document.querySelector('#paraID');
    text.innerHTML = 'Hi There I like you';
}
function imageClick()
{
    var text7 = document.querySelector('#imageID')
    text7.src="images/image1.png"
}
var images = ['images/mountain.png', "images/sky.png", "images/bird.png"];
var index = 0;

function showimage() {
    document.getElementById('slider').src = images[index];

}

function prev() {
    if (index > 0) {
        index--;
        showimage();
    }
    else {
        alert('This is the first image');
    }
}


function next() {
    if (index < images.length - 1) {
        index++;
        showimage();
    }

    else {
        alert("This is the last image");
    }
}

// showimage();