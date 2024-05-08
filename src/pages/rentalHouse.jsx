import React from 'react';
import Navbar from '../component/header/navbar';
import Footer from '../component/footer/footer';
import RentAndSellHouse from '../component/primaryComponents/rentAndSellHouse';

export default function RentalHouse() {
  

    return (
        <section>
            <Navbar />
            <main>
                <RentAndSellHouse />
                <section></section>
            </main>
            <Footer />
        </section>
    );
}