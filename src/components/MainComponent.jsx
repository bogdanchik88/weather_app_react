import { useState } from 'react'
import { fetchCityWeather } from '../api/cityApi'
import { useQuery } from '@tanstack/react-query'

const MainComponent = () => {

    const [city, setCity] = useState('Москва')
    const [submittedCity, setSubmittedCity] = useState('Москва')
    const [temperature, setTemperature] = useState('?')
    const [windSpeed, setWindSpeed] = useState('?')
    const [weatherCode, setWeatherCode] = useState('?')
    const [windDirection, setWindDirection] = useState('?')


    const { data, error, refetch, isLoading, isError } = useQuery({
      queryKey: ['weather', submittedCity],
      queryFn: () => fetchCityWeather(submittedCity),
      enabled: !!submittedCity
    })

    const handleData = async (e) => {
        e.preventDefault()
        setSubmittedCity(city)
    }

    const current = data?.current_weather

  return (
    <div className='flex flex-col gap-2 justify-center items-center h-[100vh] w-10/12 max-w-[500px] text-lg'>
      <h1 className='text-2xl text-rose-700 hover:text-violet-700 hover:scale-[120%] md:text-4xl'>Tailwind connected</h1>
      <form onSubmit={handleData}>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <button type='submit'>fetch weather</button>        
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-600">{error.message}</p>}

      {current && (
        <div className="flex flex-col gap-2">
          <p>Temperature: {current.temperature} °C</p>
          <p>Wind speed: {current.windspeed} km/h</p>
          <p>Weather code: {current.weathercode}</p>
          <p>Wind direction: {current.winddirection}°</p>
        </div>
      )}

    </div>
  )
}

export default MainComponent
