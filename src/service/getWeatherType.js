export const getWeatherType = (code) => {
  if (code === 0) return 'clear'

  if ([1, 2].includes(code)) return 'partlyCloudy'
  if (code === 3) return 'cloudy'

  if ([45, 48].includes(code)) return 'fog'

  if (code >= 51 && code <= 57) return 'drizzle'
  if (code >= 61 && code <= 67) return 'rain'
  if (code >= 71 && code <= 77) return 'snow'
  if (code >= 80 && code <= 82) return 'rain'
  if (code >= 95) return 'thunder'

  return 'cloudy'
}
