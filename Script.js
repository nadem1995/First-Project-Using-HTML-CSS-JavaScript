var circle = document.getElementById("circle");
var upBtn = document.getElementById("up-btn");
var downBtn = document.getElementById("down-btn");
var rotateValue = circle.style.transform;
var rotateSum;
upBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue = rotateSum;
   
};
downBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue = rotateSum;
   
};