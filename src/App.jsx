import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbarr from './components/Navbarr'
// import Home from './components/Home'
import Home from "./components/Home/Home"
import Services from './components/services/Services'
import Contact from './components/Contact'
import Join from './components/Join'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/join-us' element={<Join />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App