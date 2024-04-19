import React from 'react';
import ImageHeroSection from './../../assets/images/Hero Section.svg';
import {FaSearch} from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className=''>
            <div className='absolute'>
            <img src={ImageHeroSection} alt="hero section image" />
            </div>
            <div className='bg-white w-[20%] rounded-lg h-12 px-6 flex items-center shadow-md relative'>
                <FaSearch  className="text-[#004AAD]" />
                <input type="search" name="search" id="" placeholder='Votre adresse actuelle' className='bg-transparent border-none h-[90%] focus:outline-none text-base w-full ml-2'/>
            </div>
        </section>
    );
}

