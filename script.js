function openGift(){

document.getElementById("giftSection")
.style.display="block";

document.getElementById("music").play();

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

}

const images=[
"ali1.jpg",
"ali2.jpg",
"ali3.jpg",
"ali4.jpg",
"ali5.jpg"
];

const quotes=[
"Every year tells a new story.",
"Keep chasing your dreams.",
"Nineteen looks good on you.",
"The best chapters are ahead.",
"Make every moment count."
];

let current=0;

setInterval(()=>{

current++;

if(current>=images.length){
current=0;
}

document.getElementById("slide").src=
images[current];

document.getElementById("quote").innerText=
quotes[current];

},3000);

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="🤍";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize=
(Math.random()*20+20)+"px";

heart.style.animation=
"fall 8s linear";

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(100vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
