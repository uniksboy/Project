function calculateRentalCost(days, carType) {
    let costPerDay;
    switch (carType) {
        case 'Economy':
            costPerDay = 4000;
            break;
        case 'Midsize':
            costPerDay = 10000;
            break;
        case 'Luxury':
            costPerDay = 20000;
            break;
        default:
            console.log("Invalid car type");
            return;
    }
    const totalCost = costPerDay * days;
    return `Total rental cost for ${days} days in a ${carType} car: Rs. ${totalCost}`;
}

console.log(calculateRentalCost(3, 'Economy')); // Output: Total rental cost for 3 days in a Economy car: Rs. 12000
console.log(calculateRentalCost(5, 'Luxury'));  // Output: Total rental cost for 5 days in a Luxury car: Rs. 100000