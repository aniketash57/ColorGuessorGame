var colors=generateRandomsColors(6);

// alert("hello");
//document Section 
var square =document.querySelectorAll(".square");
var h1= document.querySelector("h1");
var colorDisplay=document.querySelector("#colorDisplay");
var newgame=document.querySelector("#newgame");
var pickedColor=pickColor();
console.log(pickedColor);
var message=document.querySelector("#message");
var easy =document.querySelector("#easy");
var hard=document.querySelector("#hard");
var select=document.querySelector("selected");
// alert(pickedColor);
var flag=0;
colorDisplay.textContent=pickedColor;
//add event listener section
easy.addEventListener("click",function()
{
    flag=1;
    console.log("easy");
    easy.classList.add("selected");
    hard.classList.remove("selected");
    for(var i=0;i<square.length;i++)
    {
        square[i].style.background="#232323";
    }
    colors=generateRandomsColors(3);
    pickedColor=pickColor();
    for(var i=0;i<square.length;i++)
     {

         square[i].style.background=colors[i];
     }
    // easy.style.background="blue";
    // hard.style.background="white";
});
hard.addEventListener("click",function()
{
    flag=0;
    console.log("hard");
    easy.classList.remove("selected");
    hard.classList.add("selected");
    colors=generateRandomsColors(6);
    pickedColor=pickColor();
    for(var i=0;i<square.length;i++)
     {

         square[i].style.background=colors[i];
     }
});
newgame.addEventListener("click",function()
{
    h1.style.background="steelblue";
    message.textContent=" ";
    // select.style.background="steelblue";
    console.log("newgame");
    if(flag==0)
    colors=generateRandomsColors(6);
    else 
    colors=generateRandomsColors(3);
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     for(var i=0;i<square.length;i++)
     {
     
       
         square[i].style.background=colors[i];
     }
     h1.style.background="#steelblue";
});
//for loop to color all square initially 
//  alert(square.length);
for(var i=0;i<square.length;i++)
{

  
    square[i].style.background=colors[i];
    square[i].addEventListener("click",function(){
 
        console.log("clik");

        var colorClicked=this.style.background;
        
        console.log(pickedColor);
        console.log(colorClicked);
        if(colorClicked===pickedColor)
        {
            // select.style.background=pickedColor;
            console.log(pickedColor);
            for(var j=0;j<colors.length;j++)
            {
                
                square[j].style.background=pickedColor;
                message.textContent="correct";
                message.style.color="green";
            }
              h1.style.background=pickedColor;
            
        }
        else 
        {
            this.style.backgroundColor="#232323";
            message.textContent="try Again";
            message.style.color="red";

        }
    });
    
}

//function section 
function changeColors(color)
{
    for(var j=0;j<square.length;j++)
    {
        square[i].style.background=color;
    }
};
function pickColor()
{
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomsColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColors());
    }   
    return arr;
}
function randomColors()
{
    
        var r= Math.floor(Math.random()* 255);
        var g= Math.floor(Math.random()* 255);
        var b= Math.floor(Math.random()* 255);
        return "rgb(" + r +", " + g + ", " + b + ")";
        // return "rgb("+ r+ "," + g + "," + b + ")"; 
    
}


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
