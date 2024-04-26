import React, { useEffect, useState } from 'react';
import homeDatas from './../../datas/homes-datas.json';
import { FaLongArrowAltLeft, FaLongArrowAltRight  } from "react-icons/fa"

export default function HouseContainers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalImages, setTotalImages] = useState(homeDatas.house.length);
    const [visibleImages, setVisibleImages] = useState(3);

    useEffect(() => {
        if (homeDatas.house && Array.isArray(homeDatas.house)) {
            const visibleData = homeDatas.house.slice(currentIndex, currentIndex + visibleImages);
            setVisibleImages(visibleData);
        }
    }, [currentIndex, visibleImages]);
    
    const handleLeftClick = () => {
        const newIndex = currentIndex - visibleImages;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
        }
    };
    
    const handleRightClick = () => {
        const newIndex = currentIndex + visibleImages;
        if (newIndex < totalImages) {
            setCurrentIndex(newIndex);
        }
    };

    return (
        <section className=" w-[100%] mb-12 p-2">
            <div className='pb-12 pl-12'>
                <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Location Maison</h2>
                <p>Louer une maison de qualité en toute sécurité</p>
            </div>
        <div className="flex w-[100%]">
         <div className='w-[20%]'>
         <FaLongArrowAltLeft onClick={handleLeftClick} className='w-[100%]'/>
         </div>
          
            <div className='flex flex-wrap justify-between w-[100%]'>
            {homeDatas.house.map((item, index) => (
                <div key={index} className='w-[30%] border-solid rounded-3xl shadow-2xl gap-10'>
                    <img src={item.photoUrl} alt="" />
                    <div>
                        <p className='font-bold'>{item.prix}</p>
                        <p>{item.nombreDePiece}</p>
                        <p>{item.adresse}</p>
                        <p>{item.propietaire}</p>
                    </div>
                </div>
            ))} 
            </div>
           <div className='w-[20%]'>
           <FaLongArrowAltRight  onClick={handleRightClick} className='w-[100%]' />
           </div>
           
        </div>
    </section>
    );
}
