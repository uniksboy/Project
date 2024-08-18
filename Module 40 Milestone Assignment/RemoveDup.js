function removeDuplicates(cartItems) {
    const uniqueItems = [...new Set(cartItems)];
    console.log(uniqueItems);
}

const cart = ["apple", "banana", "apple", "orange", "banana", "grape"];
removeDuplicates(cart); // ["apple", "banana", "orange", "grape"]