let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard'); // Renamed for clarity
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    { id: 1, name: 'Strawberry', image: '1.png', price: 100000 },
    { id: 2, name: 'Onions', image: '2.png', price: 50000},
    { id: 3, name: 'Tomatoes', image: '3.png', price: 40000 },
    { id: 4, name: 'Brinjal', image: '4.png', price: 50000},
    { id: 5, name: 'Brocolli', image: '5.png', price: 60000 },
    { id: 6, name: 'Poteto', image: '6.PNG', price: 40000 },
];
let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}" />
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onClick="addToCard(${key})">Add to cart</button>
        `;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = ''; // Clear existing content
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {

        if (value != null) { // Check if value is not null
            totalPrice += value.price * value.quantity; // Calculate total price
            count += value.quantity; // Calculate total quantity

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}" /></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onClick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onClick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString(); // Update total price display
    quantity.innerText = count; // Update quantity display
}

function changeQuantity(key, newQuantity) {
    if (newQuantity == 0) {
        listCards[key] = null; // Remove item if quantity is 0 or less
    } else {
        listCards[key].quantity = newQuantity; // Update quantity
    }
    reloadCard(); // Reload the cart
}



