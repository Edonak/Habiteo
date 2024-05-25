import ImageHeroSection from './../../assets/images/Hero Section.svg';
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className='section1'>
  <div className='absolute w-full h-[50vh] md:h-[66vh]'> 
    <img src={ImageHeroSection} alt="hero section image" />
  </div>
  <div className='section3 bg-white rounded-lg h-12 px-4 flex items-center shadow-md relative md:w-3/4 lg:w-1/4'>
    <input type="search" name="search" id="" placeholder='Votre adresse actuelle' className='bg-transparent border-none h-full focus:outline-none text-base w-full ml-2' />
    <FaSearch className="text-[#004AAD]" />
  </div>
</section>

    );
}


