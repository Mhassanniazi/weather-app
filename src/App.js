import react, { useEffect, useState } from "react";

function WeatherApp() {

    const [city, setCity] = useState(null);
    const [Search, setSearch] = useState('Karachi')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=7224acc6d841cc8fda4fb994decd2491&units=metric`
            const response = await fetch(url);
            const result = await response.json()
            setCity(result.main)
            console.log(result)
        }
        fetchApi()
    }, [Search])

    return (
        <div className="main">
            <div className="box">
                <div className="search">
                    <input type="search" size="50" className="search" onChange={(event) => {
                        setSearch(event.target.value)
                    }} />

                    {!city ? (
                    <p>No Data</p>
                    ):(
                    <div className="info">
                        <h2 className="Location">
                            {Search}
                        </h2>
                        <h1 className="temp">
                            {city.temp} `C
                        </h1>
                        <h3 className="data">
                            Min Temperature : {city.temp_min} Cel <br />
                            Max Temperature: {city.temp_max} Cel <br />
                            Humidity: {city.humidity} <br />
                            Pressure: {city.pressure}

                        </h3>
                    </div>
                    )}


                </div>
            </div>
        </div>
    )
}
export default WeatherApp;