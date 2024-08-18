const items = {
    "item1": 10,
    "item2": 25,
    "item3": 50
};

const exchangeRate = 80;

const convertedItems = Object.fromEntries(
    Object.entries(items).map(([item, price]) => [item, price * exchangeRate])
);

console.log(convertedItems);

