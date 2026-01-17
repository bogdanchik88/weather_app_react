import { useRef } from 'react'
import { fetchCityWeather } from '../api/cityApi'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import { cityStore } from '../store/cityStore'
import useCurrentHourValue from '../hooks/useCurrentHourValue'
import useWeatherIcon from '../hooks/useWeatherIcon'

const MainComponent = observer(() => {
  const inputRef = useRef()

    const { data, error, isLoading, isError } = useQuery({
      queryKey: ['weather', cityStore.city],
      queryFn: () => fetchCityWeather(cityStore.city),
      enabled: !!cityStore.city,
      refetchInterval: 60*60*1000,
      staleTime: 10*60*1000
    })

    const handleData = async (e) => {
        e.preventDefault()
        cityStore.submitCity()
        inputRef.current.blur()
    }

    const current = data
    const humidity = useCurrentHourValue(
      data?.hourly?.relative_humidity_2m
    )

    const weatherCode = useCurrentHourValue(
      data?.hourly?.weathercode
    )

    const WeatherIcon = useWeatherIcon(weatherCode)

  return (
    <div className='flex flex-col gap-2 justify-center items-center h-[100vh] w-10/12 max-w-[500px] text-lg'>
      <h1 className='text-2xl text-rose-700 hover:text-violet-700 hover:scale-[120%] md:text-4xl'>Tailwind connected</h1>
      <form onSubmit={handleData}>
        <input value={cityStore.inputCity} onChange={(e) => cityStore.setInputCity(e.target.value)} ref={inputRef}/>
        <button type='submit'>fetch weather</button>        
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-600">{error.message}</p>}

      {current && (
        <div className="flex flex-col gap-2">
          <p>Temperature: {data.current_weather.temperature} °C</p>
          <p>Wind speed: {data.current_weather.windspeed} km/h</p>
          <p>Weather code: {data.current_weather.weathercode}</p>
          <p>Wind direction: {data.current_weather.winddirection}°</p>
          <p>Humidity: {humidity}</p>
          <p>weatherCode: {weatherCode && <WeatherIcon className='size-10'/>}</p>
        </div>
      )}

    </div>
  )
})

export default MainComponent
