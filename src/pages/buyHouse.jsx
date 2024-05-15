import React from 'react'
import Navbar from '../component/header/navbar';
import Footer from '../component/footer/footer';
import HousePurchase from '../component/containers/housePurchase'
import SellHouseSearch from '../component/primaryComponents/sellHouseSearch';

export default function BuyHouse() {
  return (
    <section>
        <Navbar />
        <main>
          <SellHouseSearch />
          <div>
            <HousePurchase />
          </div>
        </main>
        <Footer />
    </section>
    
  )
}
