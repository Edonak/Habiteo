import NavbarLink from '../header/navbarLink';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from './../../assets/images/Habiteo-logo.png'

const Footer = () => {
  return (
    <footer className="footer mt-16 bg-[#004AAD] text-white p-5">
      <div className="footer-content">
        <nav className="footer-nav">
          <NavbarLink />
        </nav>
        <div className="social-links flex items-center justify-around">
          <div className='w-[10%]'>
            <img src={Logo} alt="logo Habiteo footer" className='w-[75%]' />
          </div>
          <div className='flex gap-20 w-[50%]'>
            <FaFacebook className='' />
            <FaLinkedin />
            <FaWhatsapp className='bg-[#25D366] rounded-full' />
            <FaInstagram className='bg-[#dd2a7b] rounded-full' />
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Habiteo | Tout Droits Reservés
      </div>
    </footer>
  );
};

export default Footer;
