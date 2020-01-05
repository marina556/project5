// $(function() {
// 	var navH = $("nav").innerHeight();
// 	var windowH = $(window).height();

//     $(".first-sec").height(windowH - navH);
// 	console.log(navH +"dd" +windowH);
    
// });


var 
    imageOne    =   document.querySelectorAll(".slider-img img"),
    sliderRight =   document.getElementById("right"),
    sliderLeft =   document.getElementById("left"),
    counter=0 , i;


 
    sliderLeft.onclick=function(){
        
        if(counter==3){
            counter=3;       
        }
        else if (counter>=0  && counter<3)
        {
            counter++;
        }
        
        for(i = 0 ; i < imageOne.length ; i++){
            imageOne[i].classList.remove("active");    
        }
        imageOne[counter].classList.add("active"); 
    }


    sliderRight.onclick=function(){        
        if(counter==0){
            counter=0;
        }
        
        else if (counter<=3 && counter>0)
        {
            counter--;
        }
        for(i = 0 ; i < imageOne.length ; i++){
            imageOne[i].classList.remove("active");  
        }
        imageOne[counter].classList.add("active");
        
    }
    
