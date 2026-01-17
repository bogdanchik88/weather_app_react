import axios from "axios"

export const fetchCityCoordinates = async (city) => {
    try {
        const res = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
            params: {
                name: city,
                count: 1,
                language: 'ru'
            }
        })
        return res.data.results[0]        
    } catch (error) {
        console.log({error})
    }
} 

export const fetchCityWeather = async (city) => {
    try {
        const res = await fetchCityCoordinates(city)
        const latitude = res.latitude
        const longitude = res.longitude

        const res2 = await axios.get('https://api.open-meteo.com/v1/forecast',{
            params: {
                latitude,
                longitude,
                hourly: 'relative_humidity_2m,temperature_2m,weathercode',
                current_weather: true,
                timezone: 'auto'
            }
        })

        return res2.data        
    } catch (error) {
        console.log({error})
    }
}