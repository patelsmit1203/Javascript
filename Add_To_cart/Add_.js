let cart = {};

function addToCart(productName) {
  // Agar product pehle se hai
  if (cart[productName]) {
    cart[productName]++;
  } else {
    cart[productName] = 1;
  }

  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  for (let product in cart) {
    let li = document.createElement("li");
    li.textContent = `${product} (Qty: ${cart[product]})`;
    cartItems.appendChild(li);
  }
}
