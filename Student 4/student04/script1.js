window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 const Top=document.querySelector('#Top');
  if ( document.documentElement.scrollTop > 10) {
    Top.style.backgroundColor = "rgba(90, 166, 144,1)";

    Top.style.transition= "background-color ease-in-out 0.5s";
  } else {
    Top.style.backgroundColor = "rgba(108, 109, 109, 0.555)";
  }
}
const Dark=document.querySelector('#Dark');
const Topic=document.querySelector('#ImageGallery');
const cards = document.querySelectorAll('.container');



Dark.addEventListener('click',()=>{
document.body.style.backgroundColor = "#1c2d31";
Topic.style.color = "#fff";
cards.forEach(card => {
  // perform an action on each card element
  // for example, you can add a class to each element:
  card.style.background="#bbbbbb7e";
  card.style.color="#e0e0e0";


})

})
const Light=document.querySelector('#Light');
Light.addEventListener('click',()=>{
document.body.style.backgroundColor = "#ffeab8";
Topic.style.color = "black";
cards.forEach(card => {
  // perform an action on each card element
  // for example, you can add a class to each element:
  card.style.background="#7b794a"
  card.style.color="#ffffff"
})

})
const Blue=document.querySelector('#Blue');
Blue.addEventListener('click',()=>{
document.body.style.backgroundColor = "#25011a";
Topic.style.color = "white";
cards.forEach(card => {
  // perform an action on each card element
  // for example, you can add a class to each element:
  card.style.background="#cccccc9d"
  card.style.color="#ffffff"
})

})
const Grey=document.querySelector('#Grey');
Grey.addEventListener('click',()=>{
document.body.style.backgroundColor = "#2b2b2b";
Topic.style.color = "white";
cards.forEach(card => {
  // perform an action on each card element
  // for example, you can add a class to each element:
  card.style.background="#00504c9d"
  card.style.color="#ffffff"
})

})
var modal = document.getElementById('myModal');


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var img2 = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var img3 = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img4 = document.getElementById('myImg4');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img5 = document.getElementById('myImg5');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img6 = document.getElementById('myImg6');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img7 = document.getElementById('myImg7');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img8 = document.getElementById('myImg8');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img9 = document.getElementById('myImg9');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img10 = document.getElementById('myImg10');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img11 = document.getElementById('myImg11');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img12 = document.getElementById('myImg12');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img12.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//Window when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 10) {
    document.getElementById("Top").style.transition= "background-color ease-in-out 0.5s";
    document.getElementById("Top").style.backgroundColor = "rgba(90, 166, 144)";
  } else {
    document.getElementById("Top").style.backgroundColor = "rgba(108, 109, 109, 0.555)";
  }
}

//color selection
var boxes = document.querySelectorAll('.color-box');
for(var i = 0; i<boxes.length; i++){
  boxes[i].addEventListener('click', function(){

    var color = this.style.backgroundColor;
    document.body.style.background = color;
    document.style.navbar = color;
  });
}

function fontchange(n){
  var modal = document.getElementById("caption");
  modal.style.fontSize = n + "px";
}

var buttons = document.querySelector(".buttons");
var button = buttons.querySelectorAll(".button");

for(var i = 0; i<button.length; i++){
  button[i].addEventListener('click', function(){
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace("active","");
      this.className == "active"
  })
}