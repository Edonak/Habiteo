import { NavLink } from 'react-router-dom';


export default function NavbarLink() {
    return (
        <nav className=' text-orange-500 items-center font-semibold navbarlink'>
            <NavLink to='/rent'> Louer </NavLink>
            <NavLink to='/sell'> Vendre </NavLink>
            <NavLink to='/buy'> Acheter </NavLink>
            <NavLink to='/display'> Afficher </NavLink>
        </nav>
    );
}


