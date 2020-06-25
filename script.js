const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
var arr=["Nice","Awesonme","Beautiful","OP","Good"];
let counter=0;
 nextBtn.addEventListener('click',nextSlide);
 prevBtn.addEventListener('click',prevSlide);

 function nextSlide(){
     
     if(counter===4)
     {
         counter=-1;
     }
     counter++;
     console.log(arr[counter]);
     container.style.backgroundImage=`url(${counter}.jpeg`

 }

 function prevSlide(){
    if(counter===0)
    {
        counter=5;
    }
    counter--;
    console.log(arr[counter]);
    container.style.backgroundImage=`url(${counter}.jpeg`

}