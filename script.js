let languages = document.querySelectorAll(".skills .languages div span");
window.addEventListener("scroll", () => {
  let reveals = document.querySelectorAll(".reveal");
  let windowheight = window.innerHeight;
  for (let i = 0; i < reveals.length; i++) {
    let top = reveals[i].getBoundingClientRect().top;
    let revealtop = 150;

    if (top < windowheight - revealtop) {
      reveals[i].classList.add("active");
      if (reveals[i].classList.contains("skills")) {
        for (let i = 0; i < languages.length; i++) {
          // languages[i].classList.add("active");
          languages[i].style.animationPlayState = "running";
        }
      }
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

let a = document.querySelector(".header ul li:last-of-type a");
let barre = document.querySelector(".onhover");

a.addEventListener("click", () => {
  if (barre.style.display == "flex") {
    barre.style.display = "none";
  } else {
    barre.style.display = "flex";
  }
});

let logo = document.querySelector(".logo");

logo.onclick = () => {
  location.href = ".#landing";
};
