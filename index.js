function converteParaFahrenheit() {
    const temperaturaCelsius = parseFloat(
        document.getElementById("temperatura-celsius").value
    );
    let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;

    document.getElementById("resultado-fahrenheit").value =
        temperaturaFahrenheit.toFixed(2);
}
