const itemList = [];

const menuHTMLNodeList = document.querySelectorAll(".menu__item");
const itemListCartElement = document.querySelector(".cart__item-list");
const subtotalCartElement = document.querySelector(".subtotal__amount");
const taxesCartElement = document.querySelector(".tax__amount");
const totalPriceCartElement = document.querySelector(".total__amount");

const theCartIsEmptyMessage = () => {
  const emptyCart = document.createElement("li");
  emptyCart.innerHTML = "The Cart is empty";
  return emptyCart;
};

const roundPrice = (number) => {
  return Math.round(parseFloat(number) * 100) / 100;
};

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
    event.target.classList.remove("menu__item-button");
    event.target.classList.add("inCart");
    event.target.innerHTML =
      "<span class='material-icons-outlined'>done</span> &nbsp In Cart";
  }
  CartRender();
}

function CartRender() {
  clearTheCartList();
  fillTheCartList();
  setTotalPrice();
  if (itemList.length === 0)
    itemListCartElement.appendChild(theCartIsEmptyMessage());
}

function setTotalPrice() {
  let totalPrice = 0;
  for (let item in itemList) {
    totalPrice += parseFloat(itemList[item].price) * itemList[item].quantity;
  }
  const subtotal = roundPrice(totalPrice);
  const tax = roundPrice(totalPrice * 0.0975);
  const price = roundPrice(subtotal + tax);

  subtotalCartElement.innerHTML = "$" + subtotal;
  taxesCartElement.innerHTML = "$" + tax;
  totalPriceCartElement.innerHTML = "$" + price;
}

function clearTheCartList() {
  while (itemListCartElement.firstChild) {
    itemListCartElement.removeChild(itemListCartElement.firstChild);
  }
}

function fillTheCartList() {
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].quantity <= 0) {
      const toDeleteFromCartList = itemList[i].name;
      for (let i = 0; i < menuHTMLNodeList.length; i++) {
        if (
          menuHTMLNodeList[i].childNodes[3].children[0].innerText ===
          toDeleteFromCartList
        ) {
          menuHTMLNodeList[i].childNodes[3].childNodes[5].classList.remove(
            "inCart"
          );
          menuHTMLNodeList[i].childNodes[3].childNodes[5].classList.add(
            "menu__item-button"
          );
          menuHTMLNodeList[i].childNodes[3].childNodes[5].innerHTML =
            "Add to Cart";
        }
      }
      itemList.splice([i], 1);
      i--;
    } else {
      const newCartItem = document.createElement("li");
      createCartItem(
        itemList[i].name,
        itemList[i].price,
        itemList[i].quantity,
        itemList[i].image,
        newCartItem // <<-- return a new cart item
      );
      itemListCartElement.appendChild(newCartItem);
    }
  }
}

function createCartItem(
  elemName,
  elemPrice,
  elemQuantity,
  elemImagePath,
  newCartItem
) {
  newCartItem.classList.add("cart__item");
  const newPictureDiv = newDom("div", "cart__item__picture-div");
  const cartItemImage = newDom("img", "cart__item-picture");
  const itemImageQuantity = newDom("span", "quantity");
  const itemInfoFrame = newDom("div", "cart__item-frame");
  const itemDescription = newDom("p", "cart__item-description");
  const itemPrice = newDom("p", "cart__item-price");
  const itemButtons = newDom("div", "cart__item-buttons");
  const itemButtonLess = newDom("div", "cart__item-button-less");
  const itemButtonMore = newDom("div", "cart__item-button-more");
  const itemQuantity = newDom("p", "cart__item-quantity");
  const itemAmount = newDom("p", "cart__item-amount");

  appendElem(newPictureDiv, cartItemImage, itemImageQuantity);
  appendElem(newCartItem, newPictureDiv, itemInfoFrame);
  appendElem(itemButtons, itemButtonLess, itemQuantity, itemButtonMore);
  appendElem(
    itemInfoFrame,
    itemDescription,
    itemPrice,
    itemButtons,
    itemAmount
  );

  cartItemImage.setAttribute("src", elemImagePath);
  itemDescription.innerHTML = elemName;
  itemPrice.innerHTML = `$${elemPrice}`;
  itemButtonLess.innerHTML =
    '<span class="material-icons-outlined md-36">chevron_left</span>';
  itemButtonMore.innerHTML =
    '<span class="material-icons-outlined md-36">chevron_right</span>';
  itemImageQuantity.innerHTML = elemQuantity;
  itemQuantity.innerHTML = elemQuantity;
  itemAmount.innerHTML = `$${roundPrice(elemPrice * elemQuantity)}`;

  return newCartItem;
}

const newDom = (tagName, className) => {
  const newDom = document.createElement(tagName);
  newDom.classList.add(className);
  return newDom;
};

function appendElem(a, b, c, d, e) {
  a.appendChild(b);
  if (c != undefined) a.appendChild(c);
  if (d != undefined) a.appendChild(d);
  if (e != undefined) a.appendChild(e);
}

function cartItemsManager(event) {
  if (event.target.parentNode.classList.contains("cart__item-button-more")) {
    for (let i in itemList) {
      if (itemList[i].name === event.path[3].childNodes[0].innerText)
        itemList[i].quantity++;
    }
  } else if (
    event.target.parentNode.classList.contains("cart__item-button-less")
  ) {
    for (let i in itemList) {
      if (itemList[i].name === event.path[3].childNodes[0].innerText)
        itemList[i].quantity--;
    }
  }
  CartRender();
}

document.querySelector(".menu__item-list").addEventListener("click", addToCart);
itemListCartElement.addEventListener("click", cartItemsManager);

CartRender();
