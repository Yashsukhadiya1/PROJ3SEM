// DOM Elements for Checkout
let checkoutBtn = document.querySelector('.checkout-btn');
let orderSummaryModal = document.querySelector('.order-summary-modal');
let orderItems = document.querySelector('.order-items');
let orderTotalPrice = document.querySelector('.order-total-price');
let confirmBtn = document.querySelector('.confirm-btn');
let cancelBtn = document.querySelector('.cancel-btn');

// Function to handle Checkout Button Click
checkoutBtn.addEventListener('click', () => {
    if (listCards.length === 0 || listCards.every(item => item === null)) {
        alert('Your cart is empty!');
        return;
    }

    // Populate the order summary
    orderItems.innerHTML = '';
    let total = 0;

    listCards.forEach((item) => {
        if (item) {
            let listItem = document.createElement('li');
            listItem.innerHTML = `
                ${item.name} x${item.quantity} - ${(
                item.price * item.quantity
            ).toLocaleString()}
            `;
            orderItems.appendChild(listItem);
            total += item.price * item.quantity;
        }
    });

    orderTotalPrice.textContent = total.toLocaleString();

    // Show the modal
    orderSummaryModal.classList.remove('hidden');
});

// Confirm Order
confirmBtn.addEventListener('click', () => {
    alert('Order confirmed! Thank you for your purchase.');

    // Reset cart and update UI
    listCards = [];
    reloadCard();
    orderSummaryModal.classList.add('hidden');
});

// Cancel Checkout
cancelBtn.addEventListener('click', () => {
    orderSummaryModal.classList.add('hidden');
});
