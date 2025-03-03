// script.js

// Mock database for cart and wishlist
const database = {
    cart: [],
    wishlist: []
};

// Utility to log messages
function updateLog(message) {
    const logList = document.getElementById('logMessages');
    const logItem = document.createElement('li');
    logItem.textContent = message;
    logList.appendChild(logItem);
}

// Add to Cart
document.getElementById('addToCart').addEventListener('click', () => {
    const product = { name: "Chillis", price: 50 };
    database.cart.push(product);
    updateLog("Added to Cart: " + JSON.stringify(product));
});


// Add to Wishlist
document.getElementById('addToWishlist').addEventListener('click', () => {
    const product = { name: "Chillis", price: 50 };
    database.wishlist.push(product);
    updateLog("Added to Wishlist: " + JSON.stringify(product));
});


// Handle Checkout
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const product = database.cart[0]; // Use first item for simplicity

    if (!product) {
        updateLog("Cart is empty! Add products before checkout.");
        return;
    }

    const orderData = {
        name,
        address,
        product_name: product.name,
        price: product.price,
        payment_method: "Cash on Delivery"
    };

    // Send data to PHP backend
    fetch('place_order.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            updateLog("Order placed successfully!");
            database.cart = []; // Clear the cart
        } else {
            updateLog("Error placing order: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        updateLog("An error occurred while placing the order.");
    });
});


// script.js

// Utility to display the cart
document.getElementById('viewCart').addEventListener('click', () => {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ""; // Clear existing items

    if (database.cart.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = "Your cart is empty.";
        cartItems.appendChild(emptyMessage);
        return;
    }

    // Iterate over the cart items and display them
    database.cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${index + 1}. ${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
    });
});


function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return false;
    }

    return true;
}
