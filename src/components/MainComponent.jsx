import { useRef } from 'react'
import { fetchCityWeather } from '../api/cityApi'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import { cityStore } from '../store/cityStore'

const MainComponent = observer(() => {
  const inputRef = useRef()

    const { data, error, refetch, isLoading, isError } = useQuery({
      queryKey: ['weather', cityStore.city],
      queryFn: () => fetchCityWeather(cityStore.city),
      enabled: !!cityStore.city
    })

    const handleData = async (e) => {
        e.preventDefault()
        cityStore.submitCity()
        inputRef.current.blur()
    }

    const current = data?.current_weather

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
          <p>Temperature: {current.temperature} °C</p>
          <p>Wind speed: {current.windspeed} km/h</p>
          <p>Weather code: {current.weathercode}</p>
          <p>Wind direction: {current.winddirection}°</p>
        </div>
      )}

    </div>
  )
})

export default MainComponent
