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
import { Ai } from './components/services/outlet/IT/Ai'
import AE from './components/services/outlet/IT/AE'
import IA from './components/services/outlet/IT/IA'
import CS from './components/services/outlet/IT/CS'
import Lm from './components/services/outlet/IT/Lm'
import Dev from './components/services/outlet/IT/Dev'

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
          <Route path='services/it/aidet' element={<Ai />} />
          <Route path='services/it/aedet' element={<AE />} />
          <Route path='services/it/iadet' element={<IA />} />
          <Route path='services/it/csdet' element={<CS />} />
          <Route path='services/it/devdet' element={<Dev />} />
          <Route path='services/it/lmdet' element={<Lm />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/join-us' element={<Join />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
