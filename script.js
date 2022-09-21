// var more = document.querySelector("more-shops");

// function readMore() {
//     console.log(12);
//     // more.classList.toggle('none');
//     // more.classList.toggle('flex');
// };

var on = document.getElementById("on");
var off = document.getElementById("off");
  
function myFunction() {  
  if (on.style.display === "none") {  
    off.style.display = "none";
    on.style.display = "block";
  } else {
    off.style.display = "block";
    on.style.display = "none";
  }
}