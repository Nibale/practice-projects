//var addText = document.getElementById("addText");
//addText.addEventListener("click" ,function(){
// alert("i have been clicked")   
//    
//});
//
//
//var addText = document.getElementById("add-text");
//addText.addEventListener("click" ,function(){
// var output = document.getElementById("output")
//    output.innerHTML="jacob is our instructor";
//});
//


var addText = document.getElementById("add-text");
var output= document.getElementById("output");
addText.addEventListener("mouseleave" ,function(){
 
    output.innerHTML=" ";
});

addText.addEventListener("mouseenter" ,function(){
 
    output.innerHTML="tabarak ";
});
addText.addEventListener("click" ,function(){
 
    output.innerHTML="nibal";
});

