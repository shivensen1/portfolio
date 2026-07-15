/* ==========================================
   PREMIUM PORTFOLIO JAVASCRIPT
========================================== */

// =========================
// Cursor Glow
// =========================

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// =========================
// Navbar Background
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background="rgba(9,9,11,.85)";
        header.style.backdropFilter="blur(25px)";

    }

    else{

        header.style.background="rgba(9,9,11,.55)";

    }

});

// =========================
// Reveal Animation
// =========================

const revealItems=document.querySelectorAll("section,.card,.course,.project-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

revealItems.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

// =========================
// Floating Glass Card
// =========================

const glass=document.querySelector(".glass-card");

if(glass){

let angle=0;

setInterval(()=>{

angle+=0.02;

glass.style.transform=

`translateY(${Math.sin(angle)*8}px)`;

},30);

}

// =========================
// Smooth Anchor Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

// =========================
// Magnetic Buttons
// =========================

document.querySelectorAll(".btn-primary,.btn-secondary,.btn-nav")

.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

button.style.transform=

`translate(${x*0.18}px,${y*0.18}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

// =========================
// Typing Effect
// =========================

const title=document.querySelector(".hero h1");

if(title){

const original=title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

if(i<original.length){

title.innerHTML+=original.charAt(i);

i++;

setTimeout(typing,20);

}

}

typing();

}

// =========================
// Counter Animation
// =========================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const value=+counter.innerText;

const speed=40;

const increment=target/speed;

if(value<target){

counter.innerText=Math.ceil(value+increment);

setTimeout(update,40);

}

else{

counter.innerText=target;

}

}

update();

});

// =========================
// Simple FAQ
// =========================

document.querySelectorAll(".faq p").forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("active");

});

});

console.log("Premium Portfolio Loaded");
