// console.log("testing");

const subscribe= document.getElementById('subscribe');
const formSub=document.getElementById("form");
const closeBtn=document.getElementById("close");

// when click to subsribe button
subscribe.addEventListener("click",(e)=>{
    formSub.style.display='block';    
})

// when click to close button
closeBtn.addEventListener("click",(e)=>{
    // after certain time it excuted
    setTimeout(function(){
        formSub.style.display='none';
    },1000);
})
