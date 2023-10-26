let label = document.querySelectorAll(".acc");

label.forEach((e) => {
  e.addEventListener("click", () => {
    removeClass();
    e.classList.toggle("active");
  });
});

function removeClass() {
  label.forEach((e) => {
    e.classList.remove("active");
  });
}

// Event Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-84px";
  }
  prevScrollpos = currentScrollPos;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    document.getElementById("navbar").style.backgroundColor = "#ffffff";
    document.getElementById("navbar").style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#ffffff";
    document.getElementById("navbar").style.boxShadow = "none";
  }
});
