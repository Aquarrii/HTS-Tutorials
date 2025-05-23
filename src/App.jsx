import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Basic1 from './pages/Basic/Basic1/Basic1'

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/basic1' element={ <Basic1 /> } />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
