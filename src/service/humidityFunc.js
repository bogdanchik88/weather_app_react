const getCurrentHumidity = (humidity) => {

    if (!humidity || !humidity.length) return null

    const date = new Date()

    const hour = date.getHours()

    return humidity[hour]
}

export default getCurrentHumidity