var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDiceimage="dice" + randomNumber1 + ".png"; // dice1.png to dice6.png 
// var randomImageSource = "images/" + randomDiceimage;  if inside folder, then folder name where images are 
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceimage);



var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomDiceimage2="dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceimage2);



if(randomNumber1 > randomNumber2)
{
   document.querySelector("h1").innerHTML="Player 1 Wins 🎉 !!";

}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins 🎉 !!";
}
else 
{
   document.querySelector("h1").innerHTML="Draw !!"; 
}
document.getElementById('refresh1').addEventListener('click',function()
{
   location.reload();
});
document.getElementById('refresh2').addEventListener('click',function()
{
   location.reload();
});
