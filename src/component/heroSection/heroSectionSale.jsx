import React from 'react';
import HeroImage from './../../assets/images/Hero Section vente maison.png';

export default function HeroSectionSale() {
    return (
        <section className='section'>
            <div className='absolute'>
                <img src={HeroImage} alt="hero section image" />
            </div>
            <div className='section2  bg-gray-600 bg-opacity-70 w-[40%] h-[25vh] rounded-lg shadow-md relative text-center mx-0 my-auto p-6'>
                <h3 className='text-[#004AAD] text-2xl font-bold'>Vendez votre maison en toute confiance</h3>
                <p className='text-white pt-6 '>Habiteo simplifie la vente de votre maison, en vous offrant le possibilité de vendre votre maison sans faire appel aux agents</p>
            </div>
        </section>
    );
}
