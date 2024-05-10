import React, { useEffect, useState } from 'react';
import homeDatas from '../../datas/homes-datas.json';

export default function HousePurchase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(3);

    useEffect(() => {
        if (homeDatas.house && Array.isArray(homeDatas.housePurchase)) {
            const visibleData = homeDatas.house.slice(currentIndex, currentIndex + visibleImages);
            setVisibleImages(visibleData);
        }
    }, [currentIndex, visibleImages]);
    
    return (
        <section className=" w-[100%] mb-12 p-2">
            <div className='pb-12 pl-12'>
                <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Achat Maison</h2>
                <p>Acheter une maison en toute sécurité</p>
            </div>
        <div className="flex w-[100%] justify-center ">
          
            <div className='flex flex-wrap w-[80%] gap-9 justify-center'>
            {homeDatas.housePurchase.map((item, index) => (
                <div key={index} className='w-[20%] border-solid rounded-xl gap-10 sell-card'>
                    <img src={item.photoUrl} alt="" className="w-[100%] h-[20vh] rounded-t-xl" />
                    <div className='sell-card-content px-2'>
                        <p className='font-bold'>{item.prix}</p>
                        <p className='text-sm'>{item.nombreDePiece}</p>
                        <p className='text-sm'>{item.adresse}</p>
                        <p className=''>{item.propietaire}</p>
                    </div>
                </div>
            ))} 
            </div>
           
        </div>
    </section>
    );
}
