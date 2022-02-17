const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const header = document.querySelector("#myHeader");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

window.addEventListener("scroll", () => {
  // Get scroll value
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    header.classList.add("add-scroll");
    scrollToTopBtn.classList.add("show");
    logo.style.color = "white";
  } else {
    header.classList.remove("add-scroll");
    scrollToTopBtn.classList.remove("show");
    logo.style.color = "black";
  }
});

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
