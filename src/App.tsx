
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
