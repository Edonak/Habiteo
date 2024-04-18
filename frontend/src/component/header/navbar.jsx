import React from 'react';
import Logo from '../primaryComponents/logo';
import NavbarLink from './navbarLink';

export default function Navbar() {
    return (
        <div className='bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-around border-b border-gray-500 pb-8 pt-4 '>
            <Logo />
            <NavbarLink />
        </div>
    );
}


