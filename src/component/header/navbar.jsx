import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../primaryComponents/logo';
import NavbarLink from './navbarLink';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <header className='bg-white flex-wrap sticky top-0 z-[20] z-10 mx-auto sticky flex w-full items-center justify-between border-b border-gray-100 pb-8'>
                <Logo />
                <div className='hidden md:flex'>
                    <NavbarLink />
                </div>
                <div className='md:hidden'>
                    <button className='pt-5' onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
                </div>
            </header>
            {
                isOpen && (<header className='flex flex-col items-center basis-full'>
                    <NavbarLink />
                </header>)
            }
        </>
    );
}


