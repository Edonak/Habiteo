import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RentalHouse from './pages/rentalHouse'
import BuyHouse from './pages/buyHouse'
import SellHouse from './pages/sellHouse'
import Display from './pages/display'
import SaleForm from './component/saleHouse/saleForm'
import SignupPage from './component/authentification/signup'
import LoginPage from './component/authentification/login'
import Rent from './component/rent/rent'
import Purchase from './component/purchase/purchase'

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
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/form" element ={<SaleForm />} />
        <Route path="/:renthouse" element={<Rent />}/>
        <Route path="/saleHouse" element={<SaleForm />}/>
        <Route path='/:purchasehouse' element={<Purchase />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
