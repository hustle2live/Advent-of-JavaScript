const hrefs = document.querySelectorAll('li a[href="#"]');
// console.log(hrefs[0]);

const headers = document.querySelectorAll("main h3");
// console.log(headers[0]);
const mainPart = document.querySelector("main");
const content = document.querySelector(".content");

let bounding = [];

for (let i = 0; i < hrefs.length; i++) {
  hrefs[i].addEventListener("click", function (event) {
    event.preventDefault();

    headers[i].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // bounding[i] = hrefs[i].getBoundingClientRect();

    hrefs.forEach((href) => {
      if (href.parentNode.classList.contains("selected"))
        href.parentNode.classList.remove("selected");
    });
    this.parentNode.classList.add("selected");

    // doesParagraphOnViewport(isInViewport(hrefs[i]));

    window.addEventListener("scroll", function (e) {
      console.log(isInViewport(hrefs[i]));
    });
  });
}

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

// main.addEventListener("scroll", function (e) {
//     if (isInViewport(headers[i]))
//       console.log(
//         isInViewport(headers[i]) + ", " + headers[i] + " yes, it's works"
//       );
//     else {
//       console.log("falsie");
//     }
//   });

// const doesParagraphOnViewport = (elem) => {
//   window.addEventListener("scroll", function (e, elem) {
//     // console.log(e);
//     if (elem) console.log(" yes, it's works");
//     else {
//       console.log("falsie");
//     }
//   });
// };
