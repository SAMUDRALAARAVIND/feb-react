import { useEffect, useState } from "react";
import { SearchCity } from "./SearchCity";
import { getWeatherReportByCity } from "./api";
import "./app.css";
import WeatherReport from "./WeatherReport";
// useEffect => Hook (function)
// Signature: Takes two arguments 
// 1. callback function that will be executed after mounting or after component update
//   => the above callback can only return a function 
// 2. An array ( dependency array )


export default function App() {
    const [cityName, setCityName] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const changeCityName = (newCityName) => {
        setCityName(newCityName);
    }

    useEffect(() => {
        if (cityName.trim()) {
            (async function () {
                const response = await getWeatherReportByCity(cityName);
                response.status === "success" ? setResponse(response.data) : setError(response.data)
            })();
        }
    }, [cityName])

    useEffect(() => {
        if (error) {
            setTimeout(() => setError(""), 3000)
        }
    }, [error])

    return (
        <div >
            <SearchCity changeCityName={changeCityName} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {
                response && <WeatherReport response={response} />
            }
        </div>
    );
}

/**
 * {
    "coord": {
        "lon": 79.5833,
        "lat": 18
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 297.3,
        "feels_like": 296.55,
        "temp_min": 297.3,
        "temp_max": 297.3,
        "pressure": 1016,
        "humidity": 30,
        "sea_level": 1016,
        "grnd_level": 987
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.89,
        "deg": 198,
        "gust": 3.04
    },
    "clouds": {
        "all": 0
    },
    "dt": 1708102067,
    "sys": {
        "country": "IN",
        "sunrise": 1708045740,
        "sunset": 1708087371
    },
    "timezone": 19800,
    "id": 1252948,
    "name": "Warangal",
    "cod": 200
}
 */