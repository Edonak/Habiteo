import React from 'react';
import Navbar from '../component/header/navbar';
import Footer from '../component/footer/footer';
import HouseLocation from '../component/containers/houseLocation';

export default function RentalHouse() {
  

    return (
        <section>
            <Navbar />
            <main>
                <HouseLocation />
            </main>
            <Footer />
        </section>
    );
}