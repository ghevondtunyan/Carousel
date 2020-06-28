const prevSlide = document.querySelector(".left-slide");
const nextSlide = document.querySelector(".right-slide");
const img = document.querySelector("img");
const imgArr = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg"];
let index = 0;

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == imgArr.length) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = imgArr.length - 1;
    } else {
      index--;
    }
  }
  img.removeAttribute("src");
  img.setAttribute("src", `${imgArr[index]}`);
}

function slideChange() {
  let play = setInterval(next, 2000);
  nextSlide.onclick = function () {
    next("next");
    clearInterval(play);
  };
  prevSlide.onclick = function () {
    next("prev");
    clearInterval(play);
  };
}
slideChange();
