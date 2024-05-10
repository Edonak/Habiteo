import React from 'react'
import Navbar from '../component/header/navbar'
import Footer from '../component/footer/footer'
import HouseLocation from '../component/containers/houseLocation'
import HousePurchase from '../component/containers/housePurchase'

export default function Display() {
  return (
    <section>
        <Navbar />
        <main>
          <HouseLocation />
          <HousePurchase />
        </main>
        <Footer />
    </section>
  )
}
