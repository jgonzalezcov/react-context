import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './view/Home.jsx'
import Favorites from './view/Favorites.jsx'
import ImgProvider from './context/ImgProvider'

function App() {
  return (
    <div className="App">
      <ImgProvider>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </ImgProvider>
    </div>
  )
}

export default App
