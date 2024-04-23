import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RentalHouse from './pages/rentalHouse'
import SaleHouse from './pages/saleHouse'

function App() {
  return (
    <>

<BrowserRouter>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<RentalHouse />}/>
        <Route path="/sell" element={ <SaleHouse /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
