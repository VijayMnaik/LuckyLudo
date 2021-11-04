let rand1=(Math.random())*6;
rand1=Math.ceil(rand1);
console.log(rand1);
let rand2=Math.random()*6;
rand2=Math.ceil(rand2);
console.log(rand2);
let dice1image="dice"+rand1+".png";
let dice2image="dice"+rand2+".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dice1image);
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice2image);
let header=document.querySelector("h1");
if(rand1===rand2){
    header.innerHTML="🚩Tied🚩";
}
else if(rand1>rand2){
    header.innerHTML="🚩Player1 wins"
}
else{
    header.innerHTML="Player2 wins🚩"
}

