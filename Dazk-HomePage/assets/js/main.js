const headerNavbar = document.querySelector(".header__navbar");

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 100) {
    headerNavbar.style.position = "fixed";
    headerNavbar.style.top = "0";
    headerNavbar.style.animation = "flyout 0.5s linear";
  } else {
    headerNavbar.style.position = "relative";
    headerNavbar.style.animation = "none";
  }
});
