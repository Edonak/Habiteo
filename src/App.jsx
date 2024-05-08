import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RentalHouse from './pages/rentalHouse'
import BuyHouse from './pages/buyHouse'
import SellHouse from './pages/sellHouse'
import Display from './pages/display'
import SaleForm from './component/saleHouse/saleForm'
import SignupPage from './pages/signup'
import LoginPage from './component/authentification/login'

function App() {
  return (
    <>

<BrowserRouter>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<RentalHouse />}/>
        <Route path="/sell" element={ <SellHouse /> } />
          <Route path='/login' element={<LoginPage />} />
        <Route path="/buy" element={ <BuyHouse /> } />
        <Route path="/display" element={ <Display /> } />
        <Route path="/rental" element={ <RentalHouse /> } />
        <Route path="/signup" element={ <SignupPage /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
