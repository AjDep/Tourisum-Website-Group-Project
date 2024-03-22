var images1 = [
    "/Student1/Images/additnalimages/1.webp",
    "/Student1/Images/additnalimages/2.webp",
    "/Student1/Images/additnalimages/3.webp",
    "/Student1/Images/additnalimages/4.webp",
  
  ];
  var index1 = 0;
  function changeImage1() {
    var image = document.getElementById("ImgTent");
    image.classList.add("hidden");
    setTimeout(function() {
      image.src = images1[index1];
      image.classList.remove("hidden");
    }, 1000);
    index1++;
    if (index1 == images1.length) {
      index1 = 0;
    }
  }
  setInterval(changeImage1, 2000);

  var images2 = [
    "/Student1/Images/additnalimages/5.webp",
    "/Student1/Images/additnalimages/6.webp",
    "/Student1/Images/additnalimages/7.webp",
    "/Student1/Images/additnalimages/8.webp",
 
  ];
var index2 = 0;
function changeImage2() {
  var image = document.getElementById("ImgBagpacks");
  image.classList.add("hidden");
  setTimeout(function() {
    image.src = images2[index2];
    image.classList.remove("hidden");
  }, 1000);
  index2++;
  if (index2 == images2.length) {
    index2 = 0;
  }
}
setInterval(changeImage2, 2000);


var images3 = [
    "/Student1/Images/additnalimages/9.webp",
    "/Student1/Images/additnalimages/10.webp",
    "/Student1/Images/additnalimages/11.webp",
    "/Student1/Images/additnalimages/13.webp",
];
var index3 = 0;
function changeImage3() {
  var image = document.getElementById("ImgMultitool");
  image.classList.add("hidden");
  setTimeout(function() {
    image.src = images3[index3];
    image.classList.remove("hidden");
  }, 1000);
  index3++;
  if (index3 == images3.length) {
    index3 = 0;
  }
}
setInterval(changeImage3, 2000);

var images4 = [
    "/Student1/Images/additnalimages/14.webp",
    "/Student1/Images/additnalimages/15.webp",
    "/Student1/Images/additnalimages/16.webp",
    "/Student1/Images/additnalimages/17.webp",
];
var index4 = 0;
function changeImage4() {
  var image = document.getElementById("ImgStoves");
  image.classList.add("hidden");
  setTimeout(function() {
    image.src = images4[index4];
    image.classList.remove("hidden");
  }, 1000);
  index4++;
  if (index4 == images4.length) {
    index4 = 0;
  }
}
setInterval(changeImage4, 2000);
const Dark=document.querySelector('#Dark');

Dark.addEventListener('click',()=>{

document.body.style.backgroundColor = "#72b185";
document.body.style.color = "#ffffff";


})
const Light=document.querySelector('#Light');
Light.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#dbbebe";
    document.body.style.color = "#575757";



Topic.style.color = "black";

})
const Blue=document.querySelector('#Blue');
Blue.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#5a5a5a";
    document.body.style.color = "#d8cccc";
})
