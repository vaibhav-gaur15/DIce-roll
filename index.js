
var image1=document.querySelectorAll("img")[0];

var randomno1=Math.floor(Math.random()*6)+1;

var randomimage1="images/dice" + randomno1 + ".png";

image1.setAttribute("src", randomimage1);


var image2=document.querySelectorAll("img")[1];

var randomno2=Math.floor(Math.random()*6)+1;

var randomimage2="images/dice" + randomno2 + ".png";

image2.setAttribute("src", randomimage2);


if(randomno1 > randomno2){
document.querySelector("h1").innerHTML="player 1 wins";}

else if(randomno1 === randomno2)
{
    document.querySelector("h1").innerHTML="Draw";
}
else
{
    document.querySelector("h1").innerHTML="player 2 wins";
}
function myFunction() {
    location.reload();
}


