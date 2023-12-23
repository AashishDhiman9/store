const products = [
    { id: 1, name: 'Ipad', price: 100000.00, image: 'product1.jpg' },
    // Add more products as needed
];

const cart = [];

function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        cart.push(selectedProduct);
        updateCart();
        console.log(`Product ${productId} added to cart.`);
    }
}

function updateCart() {
    const cartIconContainer = document.getElementById('cart-icon');

    // Update the cart icon with the count of items
    cartIconContainer.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cart.length}`;
}

function viewCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainerModal = document.getElementById('cart-items-modal');

    // Clear existing items in the cart modal
    cartItemsContainerModal.innerHTML = '';

    // Add each item to the cart modal
    cart.forEach(item => {
        const cartItemModal = document.createElement('div');
        cartItemModal.classList.add('cart-item');
        cartItemModal.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainerModal.appendChild(cartItemModal);
    });

    // Display the cart modal
    cartModal.style.display = 'block';
}

function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');

    // Close the cart modal
    cartModal.style.display = 'none';
}

function contactUs() {
    // Assuming the user is on a mobile device, initiate a phone call
    window.location.href = 'tel:+9027905615';
    // Replace the phone number with your actual contact number
}

function openGoogleMaps() {
    // Replace the latitude and longitude with your actual location coordinates
    const latitude = 29.473590;
    const longitude = 77.721629;

    // Open Google Maps with the specified location
    window.open(`https://maps.google.com/?q=${latitude},${longitude}`, '_blank');
}

window.onload = displayProducts;
