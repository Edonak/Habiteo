import imageLogo from './../../assets/images/Navlink.png'
import { NavLink } from 'react-router-dom';

export default function Logo() {
    return (
        <div className='h-8 w-32'>
            <NavLink to='/'> <img src={imageLogo} alt="" /></NavLink>
        </div>
    );
}
