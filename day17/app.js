const hrefs = document.querySelectorAll('li a[href="#"]');

const headers = document.querySelectorAll("main h3");
const mainPart = document.querySelector("main");
const content = document.querySelector(".content");

for (let i = 0; i < hrefs.length; i++) {
  hrefs[i].addEventListener("click", function (event) {
    event.preventDefault();
    headers[i].scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}

window.addEventListener("scroll", function () {
  for (let b = 0; b < hrefs.length; b++) {
    if (isInViewport(headers[b])) {
      deleteActiveItem(hrefs);
      hrefs[b].parentNode.classList.add("selected");
    }
  }
});

function isInViewport(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight - 350 ||
        document.documentElement.clientHeight - 350) &&
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
