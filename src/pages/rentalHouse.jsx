import React from 'react';
import Navbar from '../component/header/navbar';
import Footer from '../component/footer/footer';
import RentAndSellHouse from '../component/primaryComponents/bySellHouse';

export default function RentalHouse() {
  

    return (
        <section>
            <Navbar />
            <main>
                <RentAndSellHouse />
                <section>
                <div className='pb-12 pl-12'>
                <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Location Maison</h2>
                <p>Louez la maison de votre choix en toute sécurité</p>
            </div>
                </section>
            </main>
            <Footer />
        </section>
    );
}