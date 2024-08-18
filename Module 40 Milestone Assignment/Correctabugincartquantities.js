function correctCartQuantities(cart) {
    return cart.map(quantity => quantity * 2);
}

const cartQuantities = [1, 2, 3, 4];
const correctedQuantities = correctCartQuantities(cartQuantities);
console.log(correctedQuantities); // Output: [2, 4, 6, 8]
