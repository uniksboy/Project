function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const celsius = 25;
console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`); // Output: 25°C is equal to 77°F