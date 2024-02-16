const apiKey = "e6fbefd40d15fe32c5111ca4b1bc5fca";

export function getEndpoint(cityName) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
}