const listElements = document.querySelectorAll("ul li");

for (const items of listElements)
  items.childNodes[1].onclick = () => items.classList.toggle("expand");
