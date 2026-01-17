import axios from "axios"

export const fetchCityCoordinates = async (city) => {
  const res = await axios.get(
    'https://geocoding-api.open-meteo.com/v1/search',
    {
      params: {
        name: city,
        count: 1,
        language: 'ru',
      },
    }
  )

  if (!res.data.results?.length) {
    throw new Error('Город не найден')
  }
  console.log(res.data.results[0])
  return res.data.results[0]
} 

export const fetchCityWeather = async (city) => {
  const { latitude, longitude } = await fetchCityCoordinates(city)

  const res = await axios.get(
    'https://api.open-meteo.com/v1/forecast',
    {
      params: {
        latitude,
        longitude,
        hourly: 'relative_humidity_2m,temperature_2m,weathercode',
        forecast_days: 1,
        current_weather: true,
        timezone: 'auto',
      },
    }
  )

  console.log(res.data)
  return res.data
}