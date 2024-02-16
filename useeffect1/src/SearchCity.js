import { useState } from "react"

export const SearchCity = ({ changeCityName }) => {
    const [cityName, setCityName] = useState("");

    const onChangeName = (e) => {
        setCityName(e.target.value)
    }

    return <>
        <input value={cityName} onChange={onChangeName} />
        <button onClick={() => changeCityName(cityName)}>Search</button>
    </>
}