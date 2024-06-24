import ImageHeroSection from './../../assets/images/Hero Section.svg';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    axios.post('/search', { searchTerm })
      .then(response => {
        setSearchResults(response.data);
        navigate('/search-results', { state: { results: JSON.stringify(response.data) } });
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (searchTerm) {
      handleSubmit();
    }
  }, [searchTerm]);


    return (
        <section className='section1'>
            <div className='absolute w-full h-[50vh] md:h-[66vh]'>
                <img src={ImageHeroSection} alt="hero section image" />
            </div>
            <div className='section3 bg-white rounded-lg h-12 px-4 flex items-center shadow-md relative md:w-3/4 lg:w-1/4'>
                <input value={searchTerm} onChange={handleSearchChange} type="search" name="search" id="" placeholder='Votre adresse actuelle' className='bg-transparent border-none h-full focus:outline-none text-base w-full ml-2'/>
                <FaSearch className="text-[#004AAD]" onClick={handleSubmit} />
            </div>
        </section>

    );
}
