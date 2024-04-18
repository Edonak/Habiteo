import React from 'react';
import {NavLink} from 'react-router-dom';


export default function NavbarLink() {
    return (
        <ul className='flex '>
            <NavLink to='/rent'>Louer</NavLink>
            <NavLink to='/sell'>Vendre</NavLink>
            <NavLink to='/buy'>Acheter</NavLink>
            <NavLink to='/display'>Afficher</NavLink>
            <NavLink to='/rental'>Gérer les Locations</NavLink>
        </ul>
    );
}


