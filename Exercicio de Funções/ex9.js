function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let tempC = 25;
let tempF = 77;

console.log(tempC + "°C é igual a " + toFahrenheit(tempC) + "°F");
console.log(tempF + "°F é igual a " + toCelsius(tempF).toFixed(2) + "°C");
