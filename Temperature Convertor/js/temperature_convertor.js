function convertTemperature() {
    var temperatureInput = document.getElementById("temp").value;
    var unitSelect = document.getElementById("dropdown");
  

    if (temperatureInput === "") {
        alert( "Please enter a temperature.");
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (selectedUnit === "Celcius") {
        var convertedTemp = (temperature * 9/5) + 32;
        alert(temperature + " °C = " + convertedTemp.toFixed(2) + " °F");
    } else if (selectedUnit === "Fahrenheit") {
        var convertedTemp = (temperature - 32) * 5/9;
        alert( temperature + " °F = " + convertedTemp.toFixed(2) + " °C");
    } else {
        alert("Please select a valid unit.");
    }
}
