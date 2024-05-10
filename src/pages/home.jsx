import React from 'react';
import Navbar from '../component/header/navbar';
import HeroSection from '../component/heroSection/heroSection';
import HouseDetail from '../component/containers/houseDetail';
import Footer from '../component/footer/footer';
import HouseLocation from '../component/containers/houseLocation';
import HousePurchase from '../component/containers/housePurchase';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className=''>
                <HeroSection />
                <HouseLocation />
                <HousePurchase />
                <HouseDetail />
            </main>
            <Footer />
        </>
    );
}
