import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './components/Home'
import Home from "./components/Home/Home"
import Services from './components/services/Services'
import Contact from './components/Contact'
import Join from './components/Join'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/join-us' element={<Join />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
