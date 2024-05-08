import React from 'react';
import GeneralButton from '../primaryComponents/generalButton';
import LocationImage from './../../assets/images/Image card louer.svg';
import ParcoursImage from './../../assets/images/Image card parcourir.svg';
import VenteImage from './../../assets/images/image card vendre.svg';

export default function HouseDetail() {
    return (
        <section className='flex w-[100%] house-detail gap-8 mt-12 bg-white justify-center text-justify'>
            <div className='w-[25%] border-solid rounded-3xl shadow-2xl flex flex-col items-center house-card'>
                <div className=''>
                    <img src={VenteImage} alt="" />
                </div>
                <div className='p-4'>
                    <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Vendre une maison</h4>
                    <p>Quel que soit le chemin que vous empruntez pour vendre votre maison,
                        nous vous aidons pour que votre vente se passe en toute sécurité
                        et aboutir à une bonne réussite!</p>
                    <div className='btn flex flex-col items-center pt-7'>
                        <GeneralButton value="Vendre" />
                    </div>
                </div>
            </div>
            <div className='w-[25%] border-solid rounded-3xl shadow-2xl flex flex-col items-center house-card'>
                <div>
                    <img src={LocationImage} alt="image maison à louer" />
                </div>
                <div className='p-4'>
                    <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Louer une maison</h4>
                    <p>Nous créons une expérience en ligne transparente,
                        depuis les achats sur le grand réseau de location
                        jusqu'à la demande d'inscription et le payement du loyer!</p>
                    <div className='flex flex-col items-center pt-7'>
                        <GeneralButton value="Louer" />
                    </div>
                </div>
            </div>
            <div className='w-[25%] border-solid rounded-3xl shadow-2xl house-card'>
                <div>
                    <img src={ParcoursImage} alt="parcourir les images" />
                </div>
                <div className='p-4'>
                    <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Parcourir des maisons</h4>
                    <p>Trouvez votre place avec une expérience photo immersive
                        et le plus grand nombre d'annonces, y compris des choses
                        que vous ne trouverez nulle part ailleurs.!</p>
                    <div className='flex flex-col items-center pt-7'>
                        <GeneralButton value="Parcourir" />
                    </div>

                </div>
            </div>
        </section>
    );
}

