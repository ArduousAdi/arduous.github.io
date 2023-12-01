const parallax_el= document.querySelectorAll(".parallax");

let xValue=0, yValue=0;

window.addEventListener("mousemove",(e)=>{
    xValue=e.clientX-window.innerWidth/2;
    yValue=e.clientY-window.innerHeight/2;

    let rotateDegree= xValue/ (window.innerWidth/2) * 20;

    parallax_el.forEach((el)=>{
        let speedx=el.dataset.speedx;
        let speedy=el.dataset.speedy;
        let rotateSpeed=el.dataset.rotation;
        
        el.style.transform =`rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue*speedx}px)) translateY(calc(-50% + ${-yValue*speedy}px))`;

        
    });

});

let timeline =gsap.timeline();

parallax_el.forEach((el)=>{
    timeline.from(
        el,
        {
            top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
            duration:1,
            ease:"power3.out",
        },
        "1"
    );
});

timeline.from(".text.h1",{
    y:window.innerHeight - document.querySelector(".text.h1").getBoundingClientRect.top ,
    duration: 3,
},
"2.5"
);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
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