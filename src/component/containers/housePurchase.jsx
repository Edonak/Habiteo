import React, { useEffect, useState } from 'react';
import homeDatas from '../../datas/homes-datas.json';
import { NavLink } from 'react-router-dom';

export default function HousePurchase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(3);
const data = []
   
    
    return (
        <section className=" w-[100%] mb-12 p-2 bg-blue-50 pb-8">
            <div className='pb-12 pl-12'>
                <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Achat Maison</h2>
                <p>Acheter une maison en toute sécurité</p>
            </div>
        {homeDatas.housePurchase.length > 0? <div className="flex w-[100%] justify-center ">
          
            <div className='flex flex-wrap w-[80%] gap-9 justify-center'>
            {homeDatas.housePurchase.map((exo, index) => (
                <div key={index} className='w-[20%] border-solid rounded-xl gap-10 sell-card'>
                    <NavLink to={`/${exo.id}`}>
                    <img src={exo.photoUrl} alt="" className="w-[100%] h-[20vh] rounded-t-xl" />
                    </NavLink>
                    <div className='sell-card-content px-2'>
                        <p className='font-bold'>{exo.prix}</p>
                        <p className='text-sm'>{exo.nombreDePiece}</p>
                        <p className='text-sm'>{exo.adresse}</p>
                        <p className=''>{exo.propietaire}</p>
                    </div>
                </div>
            ))} 
            </div>
           
        </div>: <p>Wait please</p>}
    </section>
    );
}
