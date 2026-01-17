import { weatherIconMap } from '../service/weatherIcons'
import { getWeatherType } from '../service/getWeatherType'

const useWeatherIcon = (weatherCode) => {
  if (weatherCode == null) return null

  const type = getWeatherType(weatherCode)
  return weatherIconMap[type]
}

export default useWeatherIcon
