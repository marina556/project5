

$(document).ready(function(){

    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        rtl:true,
  });
  
  });




var 
    imageOne    =   document.querySelectorAll(".slider-img img"),
    sliderRight =   document.getElementById("right"),
    sliderLeft =   document.getElementById("left"),
    count=0 , i;




    // document.getElementById("right").addEventListener("click", displayDate);
 
    sliderLeft.onclick=function(){
        
        if(count==3){
            count=3;       
        }
        else if (count>=0  && count<3)
        {
            count++;
        }
        
        for(i = 0 ; i < imageOne.length ; i++){
            imageOne[i].classList.remove("active");    
        }
        imageOne[count].classList.add("active"); 
    }


    sliderRight.onclick=function(){        
        if(count==0){
            count=0;
        }
        
        else if (count<=3 && count>0)
        {
            count--;
        }
        for(i = 0 ; i < imageOne.length ; i++){
            imageOne[i].classList.remove("active");  
        }
        imageOne[count].classList.add("active");
        
    }
    
