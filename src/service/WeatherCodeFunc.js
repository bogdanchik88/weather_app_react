const getCurrentWeatherCode = (weather) => {
    if (!weather || !weather.length) return null

    const date = new Date()

    const hour = date.getHours()

    return weather[hour]
}

export default getCurrentWeatherCode