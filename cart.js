const CART_KEY = 'jobCart';

function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(job) {
    const cart = getCart();
    if (!cart.find(j => j.id === job.id)) {
        cart.push(job);
        saveCart(cart);
        updateCartCount();
    }
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(j => j.id !== id);
    saveCart(cart);
    renderCart();
    updateCartCount();
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    const cart = getCart();
    container.innerHTML = '';
    if (cart.length === 0) {
        container.innerHTML = '<p>No saved jobs.</p>';
        return;
    }
    cart.forEach(job => {
        const div = document.createElement('div');
        div.className = 'cart-job';
        div.innerHTML = `<h2>${job.title}</h2>
            <p><strong>${job.company}</strong> - ${job.location}</p>
            <button onclick="removeFromCart('${job.id}')">Remove</button>`;
        container.appendChild(div);
    });
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        countEl.textContent = getCart().length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();

    document.querySelectorAll('.add-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const job = {
                id: btn.dataset.id,
                title: btn.dataset.title,
                company: btn.dataset.company,
                location: btn.dataset.location
            };
            addToCart(job);
            // optionally give feedback
            btn.textContent = 'Saved';
        });
    });
});