import { useState } from 'react'
import { fetchCityWeather } from '../api/cityApi'

const MainComponent = () => {

    const [city, setCity] = useState('Москва')
    const [temperature, setTemperature] = useState('?')
    const [windSpeed, setWindSpeed] = useState('?')
    const [weatherCode, setWeatherCode] = useState('?')
    const [windDirection, setWindDirection] = useState('?')


    const handleData = async (e) => {
        e.preventDefault()
        try {
            const res2 = await fetchCityWeather(city)
            setTemperature(res2.current_weather.temperature)
            setWindSpeed(res2.current_weather.windspeed)
            setWeatherCode(res2.current_weather.weathercode)
            setWindDirection(res2.current_weather.winddirection)
            console.log(res2)
        } catch (error) {
            console.log({ 'error' : error })
        }
    }

  return (
    <div className='flex flex-col gap-2 justify-center items-center h-[100vh] w-10/12 max-w-[500px] text-lg'>
      <h1 className='text-2xl text-rose-700 hover:text-violet-700 hover:scale-[120%] md:text-4xl'>Tailwind connected</h1>
      <form onSubmit={handleData}>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <button type='submit'>fetch weather</button>        
      </form>
      <div className='flex flex-col justify-between gap-3'>
        <p>Temperature: {temperature}</p>
        <p>Wind speed: {windSpeed}</p>
        <p>weather code: {weatherCode}</p>
        <p>Wind direction: {windDirection}</p>
      </div>

    </div>
  )
}

export default MainComponent
