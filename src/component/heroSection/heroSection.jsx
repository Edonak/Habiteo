import ImageHeroSection from './../../assets/images/Hero Section.svg';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HeroSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        axios.get(`/api/search?term=${searchTerm}`)
            .then((response) => {
                setSearchResults(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (searchTerm) {
            handleSearch();
        }
    }, [searchTerm]);

    return (
        <section className='section1'>
            <div className='absolute w-full h-[50vh] md:h-[66vh]'>
                <img src={ImageHeroSection} alt="hero section image" />
            </div>
            <div className='section3 bg-white rounded-lg h-12 px-4 flex items-center shadow-md relative md:w-3/4 lg:w-1/4'>
                <input type="search" name="search" id="" placeholder='Votre adresse actuelle' className='bg-transparent border-none h-full focus:outline-none text-base w-full ml-2' value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <FaSearch className="text-[#004AAD]" onClick={handleSearch} />
            </div>
        </section>

    );
}

//Back Recherch
// app.get('/search/:searchTerm', async (req, res) => {
//   const searchTerm = req.params.searchTerm;
//   const results = await prisma.product.findMany({
//     where: {
//       OR: [
//         { name: { contains: searchTerm } },
//         { description: { contains: searchTerm } },
//         // Ajoutez d'autres champs si nécessaire
//       ],
//     },
//   });
//   res.json(results);
// });