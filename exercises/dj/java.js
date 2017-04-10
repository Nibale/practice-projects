var box =document.querySelector(".dj-box");
box.addEventListener("click", function(){
    box.style.backgroundColor="red";
    box.style.borderRadius = "50%";
});
box.addEventListener("mousenter", function(){
    box.style.backgroundColor="yellow";
      box.style.borderRadius = "50%";
  
});
box.addEventListener("mouseleave", function(){
    box.style.backgroundColor="blue";
    box.style.borderRadius = "50%";
});

window.addEventListener("keydown", function(){
     box.style.backgroundColor="pink";
});

window.addEventListener("scroll", function(){
     box.style.backgroundColor="green";
});

window.addEventListener("keyup", function(event){
    console.log(Event.which);
    if(Event.which===82){
     box.style.backgroundColor="red";
    }
        else if(event.which===66){
        box.style.backgroundColor="blue";    
        }
   });
