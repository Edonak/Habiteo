import React from 'react';
import Navbar from '../component/header/navbar';
import Footer from '../component/footer/footer';
import ByRentHouse from '../component/primaryComponents/byRentHouse';

export default function BuyHouse() {
  return (
    <section>
        <Navbar />
        <main>
          <div>
            <ByRentHouse />
          </div>
          <section>
            <div className='pb-12 pl-12'>
                <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Achat Maison</h2>
                <p>Achetez la maison de votre choix en toute sécurité</p>
            </div>
          </section>
          
        </main>
        <Footer />
    </section>
    
  )
}
