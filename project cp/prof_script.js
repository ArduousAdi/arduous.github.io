const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("div").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

var i=0;

setInterval(()=>{

    document.body.style.background="linear-gradient(135deg,violet 0%, blue "+i+"%, darkorchid 100%)";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="100vw ";
    document.body.style.background="linear-gradient(135deg,darkorchid 0%, dark-blue "+i+"%, violet 100%)";
     i++;
     
     
    if(i==100){
        
        i=0;      
               
    }
   
    
},50);