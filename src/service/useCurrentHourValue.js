import { useEffect, useState } from 'react'

const useCurrentHourValue = (weatherArray) => {
  const [currentValue, setCurrentValue] = useState(null)

  useEffect(() => {
    if (!weatherArray?.length) {
      setCurrentValue(null)
      return
    }

    const update = () => {
      const hour = new Date().getHours()
      setCurrentValue(weatherArray[hour])
    }

    update()
    const timer = setInterval(update, 60 * 1000)

    return () => clearInterval(timer)
  }, [weatherArray])

  return currentValue
}

export default useCurrentHourValue
