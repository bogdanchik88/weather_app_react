import axios from 'axios'

const MainComponent = () => {

    const handleData = async () => {
        try {
            const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${'Санкт-Петербург'}&count=1&language=ru`)
            console.log(res)
        } catch (error) {
            console.log({ 'error' : error })
        }
    }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <h1 className='text-2xl text-rose-700 hover:text-violet-700 hover:scale-[120%] md:text-4xl'>Tailwind connected</h1>
      <button onClick={() => handleData()}>fetch weather</button>
    </div>
  )
}

export default MainComponent
