import Cloudy from "./images/cloudy.jpeg";
import Spring from "./images/spring.jpeg";
import Sunny from "./images/sunny.jpeg";

export default function WeatherReport({ response }) {
    const temparature = response.main.temp - 273.15;
    const imageSrc = temparature > 30 ? Sunny : temparature < 20 ? Spring : Cloudy;

    return (
        <div className="report" style={{ backgroundImage: `url(${imageSrc})` }}>
            <h1>City: {response.name}</h1>
            <h3>Status: {response.weather[0].main}</h3>
            <p>{`Temparature: ${response.main.temp}`}</p>
            <p>{`Wind Speed: ${response.wind.speed}`}</p>
        </div>
    );
}