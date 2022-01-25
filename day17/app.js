const hrefs = document.querySelectorAll('li a[href="#"]');
// console.log(hrefs[0]);

const headers = document.querySelectorAll("main h3");
// console.log(headers[0]);
const mainPart = document.querySelector("main");
const content = document.querySelector(".content");

// const hrefCoords = [180, 240, 285, 345, 414, 463, 532, 582, 640];

let bounding = [];

for (let i = 0; i < hrefs.length; i++) {
  hrefs[i].addEventListener("click", function (event) {
    event.preventDefault();
    headers[i].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    deleteActiveItem(hrefs);
    this.parentNode.classList.add("selected");
  });
}

const array = {};

window.addEventListener("scroll", function () {
  headers.forEach((item) => isInViewport(item) && console.log(item));
});

function isInViewport(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

const deleteActiveItem = () => {
  hrefs.forEach((href) => {
    href.parentNode.classList.contains("selected") &&
      href.parentNode.classList.remove("selected");
  });
};
