import './App.css'
import { Article } from './components/Article'
import { ImageDrawers } from './components/ImageDrawers'


function App() {


  return (
    <div className='bg-nightGrayishBlue flex justify-center items-center h-screen
    flex-col relative'>
      <ImageDrawers />
      <Article />
    </div>
  )
}

export default App
