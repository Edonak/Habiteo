import React from 'react';
import Navbar from '../component/header/navbar';
import HeroSectionSale from '../component/heroSection/heroSectionSale';
import SaleDetail from '../component/saleHouse/saleDetail';

export default function SaleHouse() {
    return (
        <section>
                <Navbar />
                <HeroSectionSale />
                <SaleDetail />
        </section>
    );
}