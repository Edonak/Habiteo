import React from 'react';


export default function NavbarLink() {
    return (
        <ul className='flex justify-between gap-10 text-orange-500 items-center mt-6 pr-6 font-semibold'>
            <li to='/rent'>Louer</li>
            <li to='/sell'>Vendre</li>
            <li to='/buy'>Acheter</li>
            <li to='/display'>Afficher</li>
            <li to='/rental'>Gérer les Locations</li>
        </ul>
    );
}


