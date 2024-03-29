const weathers={'8':"day-sunny","5":"day-rain"};

const getWeatherState = icon=> weathers[icon]

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState((weather_data.weather[0].id.toString()).substring(0, 1));
    const temperature = temp;

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    return data;
}

export default transformWeather;