import React from 'react'
import Navbar from '../component/header/navbar'
import Footer from '../component/footer/footer'

export default function Display() {
  return (
    <section>
        <Navbar />
        <main>
        <div className='pb-12 pl-12'>
                <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Voir toutes les maisons disponibles</h2>
                <p>Vous pouvez voir les maison en location et les maisons en vente</p>
        </div>

        </main>
        <Footer />
    </section>
  )
}
