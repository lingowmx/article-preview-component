import './App.css'
import { Article } from './components/Article'
import { ImageDrawers } from './components/ImageDrawers'


function App() {


  return (
    <div className='bg-nightGrayishBlue flex justify-center items-center h-screen xl:w-screen'>
      <div className='flex flex-col relative xl:flex-row xl:max-w-6xl xl:mx-auto'>
        <ImageDrawers />
        <Article />
      </div>
    </div>
  )
}

export default App
