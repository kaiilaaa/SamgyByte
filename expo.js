let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {

    cart.push({ name: productName, price: productPrice });


    totalPrice += productPrice;


    displayCart();
}

function displayCart() {

    const cartItems = document.getElementById('cart-items');

    
 
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} `;
       
        const removeButton = document.createElement('button');
        removeButton.textContent = ' Remove ';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
  
    const itemPrice = cart[index].price;
    cart.splice(index, 1);
    totalPrice -= itemPrice;
    displayCart();
}
