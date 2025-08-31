const images = ["images/bird.png", "images/image1.png", "images/mountain.png", "images/sky.png"]
let indx = 0; 
function showImage()
{
    document.querySelector("#imgid").src=images[indx]
}
function prev()
{
    if (indx > 0)
    {
        indx--;
        showImage();
    }
    else
    {
        alert("Cant go back")
    }
}
function next()
{
    if (indx < images.length - 1)
    {
        indx++;
        showImage();
    }
    else
    {
        alert("Cant go further")
    }
}
showImage();

function colorChange(name)
{
    const container = document.querySelector(".container")
    container.style.backgroundColor = name;
}