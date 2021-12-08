document.querySelector(".menu__item-list").addEventListener("click", addToCart);
const itemList = [];

const cartListElement = document.querySelector(".cart__item-list");

function addToCart(event) {
  if (event.target.classList.contains("menu__item-button")) {
    const item = {};
    item.name = event.path[2].childNodes[3].childNodes[1].innerText;

    const priceText = event.path[2].childNodes[3].childNodes[3].innerText;
    const priceValue = priceText.slice(1);

    item.price = priceValue;
    item.quantity = 1;
    item.image = event.path[2].childNodes[1].attributes[0].value;
    itemList.push(item);

    //change addToCart button
    event.target.classList.add("inCart");
    event.target.innerHTML =
      "<span class='material-icons-outlined'>done</span> &nbsp In Cart";
  }
  CartRender(itemList);
}

function CartRender(itemList) {
  while (cartListElement.firstChild) {
    cartListElement.removeChild(cartListElement.firstChild);
  }

  for (let i = 0; i < itemList.length; i++) {
    createCartItem(
      itemList[i].name,
      itemList[i].price,
      itemList[i].quantity,
      itemList[i].image
    );
  }
}

function createCartItem(
  elementName,
  elementPrice,
  elementQuantity,
  elementImage
) {
  const newCartItem = document.createElement("li");
  const newPictureDiv = document.createElement("div");
  const cartItemImage = document.createElement("img");
  const itemImageQuantity = document.createElement("span");

  newCartItem.classList.add("cart__item");
  newPictureDiv.classList.add("cart__item__picture-div");
  cartItemImage.classList.add("cart__item-picture");
  itemImageQuantity.classList.add("quantity");

  const itemInfoFrame = document.createElement("div");
  itemInfoFrame.classList.add("cart__item-frame");

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("cart__item-description");

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("cart__item-price");

  const itemButtons = document.createElement("div");
  itemButtons.classList.add("cart__item-buttons");

  const itemButtonLess = document.createElement("div");
  itemButtonLess.classList.add("cart__item-button-less");

  const itemButtonMore = document.createElement("div");
  itemButtonMore.classList.add("cart__item-button-more");

  const itemQuantity = document.createElement("p");
  itemQuantity.classList.add("cart__item-quantity");

  const itemAmount = document.createElement("p");
  itemAmount.classList.add("cart__item-amount");

  newPictureDiv.appendChild(cartItemImage);
  newPictureDiv.appendChild(itemImageQuantity);
  newCartItem.appendChild(newPictureDiv);
  newCartItem.appendChild(itemInfoFrame);

  itemInfoFrame.appendChild(itemDescription);
  itemInfoFrame.appendChild(itemPrice);
  itemInfoFrame.appendChild(itemButtons);
  itemInfoFrame.appendChild(itemAmount);

  itemButtons.appendChild(itemButtonLess);
  itemButtons.appendChild(itemQuantity);
  itemButtons.appendChild(itemButtonMore);

  cartItemImage.setAttribute("src", elementImage);

  itemDescription.innerHTML = elementName;

  itemPrice.innerHTML = `$${elementPrice}`;

  itemButtonLess.innerHTML =
    '<span class="material-icons-outlined md-36">chevron_left</span>';

  itemImageQuantity.innerHTML = elementQuantity;
  itemQuantity.innerHTML = elementQuantity;

  itemButtonMore.innerHTML =
    '<span class="material-icons-outlined md-36">chevron_right</span>';

  itemAmount.innerHTML = `$${elementPrice * elementQuantity}`;
  cartListElement.appendChild(newCartItem);
}

// const menuListElement = document.querySelectorAll(".menu__item");
// console.log(menuListElement);

// const arrayMenu = [
//   {
//     name: "French Fries with Ketchup",
//     image: "plate__french-fries",
//     price: 2.23,
//     quantity: 1
//   },
//   {
//     name: "Salmon and Vegetables",
//     image: "plate__salmon-vegetables",
//     price: 5.12,
//     quantity: 1
//   },
//   {
//     name: "Spaghetti with Sauce",
//     image: "plate__spaghetti-meat-sauce",
//     price: 7.82,
//     quantity: 1
//   },
//   {
//     name: "Breakfast with eggs and bacon",
//     image: "plate__bacon-eggs",
//     price: 4.5,
//     quantity: 1
//   },
//   {
//     name: "Fish sticks fries",
//     image: "plate__fish-sticks-fries",
//     price: 8.24,
//     quantity: 1
//   },
//   {
//     name: "Chicken salad menu",
//     image: "plate__chicken-salad",
//     price: 4.65,
//     quantity: 1
//   },
//   { name: "Tortellini", image: "plate__tortellini", price: 3.95, quantity: 1 },
//   { name: "Ravioli menu", image: "plate__ravioli", price: 3.2, quantity: 1 }
// ];
