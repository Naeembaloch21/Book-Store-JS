let firstcart = JSON.parse(localStorage.getItem('storeTheCards')) || [];
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
function getObjectByIndex(index) {
    if (Array.isArray(firstcart) && index >= 0 && index < firstcart.length) {
        let selectedCart = firstcart[index];
        
        if (cartItems.find(item => item.id === selectedCart.id)) {
            alert('Item is already in the cart');
        } else {
            cartItems.push(selectedCart);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            console.log(selectedCart);
        }
    } else {
        console.log('Invalid index or cart does not exist.');
    }
}
