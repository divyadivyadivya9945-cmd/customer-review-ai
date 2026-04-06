// simple login
function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){

localStorage.setItem("login",true);
window.location="index.html";

}
else{
document.getElementById("msg").innerHTML="Invalid login";
}

}

// sentiment
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function analyzeReview(){

let text=document.getElementById("review").value;

let positiveWords=["good","great","excellent","amazing","love"];
let negativeWords=["bad","worst","poor","hate","problem"];

let sentiment="Neutral";

positiveWords.forEach(word=>{
if(text.includes(word)) sentiment="Positive";
});

negativeWords.forEach(word=>{
if(text.includes(word)) sentiment="Negative";
});

reviews.push({text, sentiment});

localStorage.setItem("reviews",JSON.stringify(reviews));

document.getElementById("result").innerHTML=sentiment;

}

// dashboard data
window.onload=function(){

let list=document.getElementById("reviewList");

if(!list) return;

let positive=0;
let negative=0;

reviews.forEach(r=>{

let li=document.createElement("li");
li.innerHTML=r.text+" - "+r.sentiment;

list.appendChild(li);

if(r.sentiment=="Positive") positive++;
if(r.sentiment=="Negative") negative++;

});

document.getElementById("total").innerHTML=reviews.length;
document.getElementById("positive").innerHTML=positive;
document.getElementById("negative").innerHTML=negative;

drawChart(positive,negative);

}
