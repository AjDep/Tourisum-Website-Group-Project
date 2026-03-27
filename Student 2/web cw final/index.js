//Window when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 10) {
    document.getElementById("Top").style.transition= "background-color ease-in-out 0.5s";
    document.getElementById("Top").style.backgroundColor = "rgba(90, 166, 144,1)";
  } else {
    document.getElementById("Top").style.backgroundColor = "rgba(108, 109, 109, 0.555)";
  }
}
var images1 = [
  "images/student_02/1.jpg",
  "images/student_02/2.jpg",
  "images/student_02/3.webp",
  "images/student_02/4.webp",
  "images/student_02/5.webp",
  "images/student_02/6.webp",
 "images/student_02/11.webp"

];
var index1 = 0;
function changeImage1() {
  var image = document.getElementById("intro1");
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
  "images/student_02/7.webp",
  "images/student_02/8.webp",
  "images/student_02/9.webp",
  "images/student_02/10.webp",
  "images/student_02/12.webp"
];
var index2 = 0;
function changeImage2() {
  var image = document.getElementById("intro2");
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
  "images/student_02/food/1.webp",
  "images/student_02/food/2.webp",
  "images/student_02/food/3.webp",
  "images/student_02/food/4.webp",
  "images/student_02/food/5.webp",
  "images/student_02/13.webp"

];
var index3 = 0;
function changeImage3() {
  var image = document.getElementById("intro3");
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


