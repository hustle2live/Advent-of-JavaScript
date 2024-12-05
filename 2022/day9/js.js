const content = [
  {
    image: "dave-hoefler-okUIdo6NxGo-unsplash.jpg",
    caption: "Photo by Dave Hoefler on Unsplash"
  },
  {
    image: "sherman-yang-VBBGigIuaDY-unsplash.jpg",
    caption: "Photo by Sherman Yang n Unsplash"
  },
  {
    image: "jakob-owens-EwRM05V0VSI-unsplash.jpg",
    caption: "Photo by Jakob Owens on Unsplash"
  },
  {
    image: "finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
    caption: "Photo by Dan Grinwis on Unsplash"
  },
  {
    image: "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
    caption: "Photo by Vincentiu Solomon on Unsplash"
  },
  {
    image: "silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
    caption: "Photo by Silas Baisch on Unsplash"
  },
  {
    image: "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
    caption: "Photo by Eugene Golovesov on Unsplash"
  },
  {
    image: "jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
    caption: "Photo by Jennifer reynolds on Unsplash"
  },
  {
    image: "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
    caption: "Photo by Kellen Riggin on Unsplash"
  },
  {
    image: "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
    caption: "Photo by Rafael Hoyos on Unsplash"
  },
  {
    image: "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
    caption: "Photo by Sonya Romanovska on Unsplash"
  }
];

const mainPictureElement = document.querySelector(".feature img"),
  captionElement = document.querySelector(".caption"),
  pictureGallery = document.getElementsByTagName("li"),
  arrowLeft = document.querySelector(".left"),
  arrowRight = document.querySelector(".right"),
  galleryDivElement = document.querySelector(".thumbnails");

function nextPicture() {
  for (let i = 0; i < pictureGallery.length; i++) {
    if (pictureGallery[i].className === "selected") {
      pictureGallery[i].classList.remove("selected");

      if (i === pictureGallery.length - 1) i = -1;

      pictureGallery[i + 1].classList.add("selected");
      i++;
    }
  }
  renderMainPicture();
}

function prevPicture() {
  for (let i = pictureGallery.length - 1; i >= 0; i--) {
    if (pictureGallery[i].className === "selected") {
      pictureGallery[i].classList.remove("selected");

      if (i === 0) i = pictureGallery.length;

      pictureGallery[i - 1].classList.add("selected");
      i--;
    }
  }
  renderMainPicture();
}

function clickOnPicture(event) {
  for (const picture of pictureGallery)
    if (picture.className === "selected") picture.classList.remove("selected");
  event.path[2].classList.add("selected");
  renderMainPicture();
}

function renderMainPicture() {
  let activePicturePath, activePictureName, activePictureCaption;

  for (const picture of pictureGallery)
    if (picture.className === "selected")
      activePicturePath = picture.children[0].children[0].getAttribute("src");

  activePictureName = activePicturePath.slice(9);

  for (const key of content)
    if (key.image === activePictureName) activePictureCaption = key.caption;

  captionElement.textContent = activePictureCaption;
  mainPictureElement.setAttribute("src", activePicturePath);
}

arrowRight.addEventListener("click", nextPicture);
arrowLeft.addEventListener("click", prevPicture);
galleryDivElement.addEventListener("click", clickOnPicture);
