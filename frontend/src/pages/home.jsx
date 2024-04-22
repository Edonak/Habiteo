import React from 'react';
import Navbar from '../component/header/navbar';
import HeroSection from '../component/heroSection/heroSection';
import HouseDetail from '../component/containers/houseDetail';
import Footer from '../component/footer/footer';
import HouseContainers from '../component/containers/houseContainers';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className=''>
                <HeroSection />
                <HouseContainers />
                <HouseDetail />
            </main>
            <Footer />
        </>
    );
}
