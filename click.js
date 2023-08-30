
const btn2=document.querySelector(".btn2")
btn2.style.display="none";


document.addEventListener("keydown",(pressed)=>{
   
    const keypressed = pressed.key;
    const numberofkey = pressed.keyCode;
    document.querySelector(".pressed_key").innerText = keypressed;
    document.querySelector(".numb").innerText=numberofkey;
   
    btn2.style.display="inline";

})