// Constants

const menuBurger = document.querySelector(".menu__burger");
const body = document.body;
const menuList = document.querySelector(".menu__list");
const menuListLinks = document.querySelectorAll(".menu__link");
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
  navigator.userAgent
);
const ibgElements = document.querySelectorAll(".ibg");
const preloader = document.querySelector(".page-preloader");

// ibgElements

for (let i = 0; i < ibgElements.length; i++) {
  const element = ibgElements[i];
  if (element.querySelector("img")) {
    element.style.backgroundImage = `url(${element
      .querySelector("img")
      .getAttribute("src")})`;
  }
}

// menuBurger click

menuBurger.addEventListener("click", function () {
  menuBurger.classList.toggle("active");
  body.classList.toggle("lock");
  menuList.classList.toggle("open");
});

for (let i = 0; i < menuListLinks.length; i++) {
  const menuLink = menuListLinks[i];
  menuLink.addEventListener("click", function (e) {
    if (menuBurger.classList.contains("active")) {
      menuBurger.click();
    }
  });
}

// touch or pc class adding

document.addEventListener("DOMContentLoaded", function () {
  if (isMobile) {
    body.classList.add("touch");
  } else {
    body.classList.add("pc");
  }

  // preloader

  setTimeout(function () {
    preloader.style.display = "none";
  }, 600);
});
