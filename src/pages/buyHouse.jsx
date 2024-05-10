import React from 'react'
import Navbar from '../component/header/navbar';
import Footer from '../component/footer/footer';
import HousePurchase from '../component/containers/housePurchase'

export default function BuyHouse() {
  return (
    <section>
        <Navbar />
        <main>
          <div>
            <HousePurchase />
          </div>
        </main>
        <Footer />
    </section>
    
  )
}
