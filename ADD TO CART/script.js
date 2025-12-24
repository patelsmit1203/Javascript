let total = 0;

// Function 1: Add item to cart
function addToCart(productName, productPrice) {
    const cartList = document.getElementById('cart-items');
    const emptyMsg = document.querySelector('.empty-msg');
    const totalSpan = document.getElementById('total-price');

    // Remove "empty" message if it exists
    if (emptyMsg) {
        emptyMsg.remove();
    }

    // Create list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${productName}</span>
        <span>$${productPrice}</span>
    `;
    
    // Add fade-in animation
    li.style.animation = "fadeIn 0.5s";

    cartList.appendChild(li);

    // Update Total
    total += productPrice;
    totalSpan.innerText = total.toLocaleString(); 
}

// Function 2: Clean/Clear Cart
function clearCart() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total-price');

    // Reset list
    cartList.innerHTML = '<li class="empty-msg">Your cart is empty</li>';
    
    // Reset total
    total = 0;
    totalSpan.innerText = "0";
}

// Function 3: Place Order and Show Alert
function placeOrder() {
    // Check if cart is empty
    if (total === 0) {
        alert("Cart is empty! Please add some products first.");
        return;
    }

    // Show Success Alert
    alert("Your order is booked know");

    // Optional: Auto-clear cart after order 
    clearCart();
}

// Adding animation style dynamically
document.head.insertAdjacentHTML("beforeend", `<style>@keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }</style>`)