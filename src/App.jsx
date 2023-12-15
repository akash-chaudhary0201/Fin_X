import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./components/Home/Home"
import Services from './components/services/Services'
import Contact from './components/Contact/Contact'
import Join from './components/Join/Join'
import NavBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Finance from './components/services/outlet/Finance/Finance'
import It from './components/services/outlet/IT/It'
import Fin_Det from './components/services/outlet/Finance/Fin_Det'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/services/' element={<Services />}>
            <Route path='finance/' element={<Finance />}></Route>
            <Route path='it' element={<It />}></Route>
          </Route>
          <Route path='services/finance/findet' element={<Fin_Det />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/join-us' element={<Join />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
