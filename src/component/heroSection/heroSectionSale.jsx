import React from 'react';
import HeroImage from './../../assets/images/Hero Section vente maison.png';

export default function HeroSectionSale() {
    return (
        <section className='section'>
            <div className='absolute'>
                <img src={HeroImage} alt="hero section image" />
            </div>
            <div className='section2  bg-gray-500 bg-opacity-40 w-[40%] h-[20vh] rounded-lg shadow-md relative text-center mx-0 my-auto'>
                <h3 className='text -[#004AAD] text-2xl font-bold'>Vendez votre maison en toute confiance</h3>
                <p className='text-[#004AAD] pt-6'>Habiteo simplifie la vente de votre maison.</p>
            </div>
        </section>
    );
}
