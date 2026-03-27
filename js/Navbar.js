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