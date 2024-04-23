import { NavLink } from 'react-router-dom';
import React from 'react';


export default function NavbarLink() {
    return (
        <nav className='flex justify-between gap-10 text-orange-500 items-center mt-6 pr-6 font-semibold'>
            <NavLink to='/rent'>Louer</NavLink>
            <NavLink to='/sell'>Vendre</NavLink>
            <NavLink to='/buy'>Acheter</NavLink>
            <NavLink to='/display'>Afficher</NavLink>
            <NavLink to='/rental'>Gérer les Locations</NavLink>
        </nav>
    );
}


