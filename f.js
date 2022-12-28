let w1 = document.querySelector(".w1")
let w2 = document.querySelector(".w2")
let body = document.querySelector("body")
let h1 = document.querySelector("h2")

w1.addEventListener("click",()=>{
    if(w1.classList == "w1"){
       w2.style.transform = `translate(${90}px,0px)`;
       w1.classList.add("tre");
       body.style.transition = "all 1.4s";
       body.style.backgroundColor = "black";
       h1.textContent = "off"
 

    }
   else{     
          w2.style.transform = `translate(${0}px,0px)`
          w1.classList.remove("tre")
          body.style.transition = "all 1.4s"
          body.style.backgroundColor = "#fff";
          h1.textContent = "on"
        }
})