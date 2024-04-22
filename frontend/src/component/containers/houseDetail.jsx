import React from 'react';
import GeneralButton from '../primaryComponents/generalButton';
import LocationImage from './../../assets/images/Image card louer.svg';
import ParcoursImage from './../../assets/images/Image card parcourir.svg';
import VenteImage from './../../assets/images/image card vendre.svg';

export default function HouseDetail() {
    return (
        <section className='flex w-[100%] house-detail'>
            <div className='w-[25%]'>
                <div>
                    <img src={VenteImage} alt="" />
                </div>
                <div>
                    <h4>Vendre une maison</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus fugiat quam labore, nobis magni deserunt incidunt consequuntur porro.
                        Placeat quaerat corporis illum. Esse quia libero impedit,
                        et facilis provident nostrum expedita quo suscipit,
                        tempora ad eveniet voluptas saepe,
                        vel earum non molestiae deserunt harum aperiam magni repellendus natus adipisci! Consequuntur!</p>
                    <div className='mx-auto'>
                        <GeneralButton value="Vendre" />
                    </div>
                </div>
            </div>
            <div className='w-[25%]'>
                <div>
                    <img src={LocationImage} alt="image maison à louer" />
                </div>
                <div>
                    <h4>Louer une maison</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus fugiat quam labore, nobis magni deserunt incidunt consequuntur porro.
                        Placeat quaerat corporis illum. Esse quia libero impedit,
                        et facilis provident nostrum expedita quo suscipit,
                        tempora ad eveniet voluptas saepe,
                        vel earum non molestiae deserunt harum aperiam magni repellendus natus adipisci! Consequuntur!</p>
                    <div className='mx-auto'>
                        <GeneralButton value="Louer" />
                    </div>
                </div>
            </div>
            <div className='w-[25%]'>
                <div>
                    <img src={ParcoursImage} alt="parcourir les images" />
                </div>
                <div>
                    <h4>Parcourir des maisons</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus fugiat quam labore, nobis magni deserunt incidunt consequuntur porro.
                        Placeat quaerat corporis illum. Esse quia libero impedit,
                        et facilis provident nostrum expedita quo suscipit,
                        tempora ad eveniet voluptas saepe,
                        vel earum non molestiae deserunt harum aperiam magni repellendus natus adipisci! Consequuntur!</p>
                    <div className='mx-auto'>
                        <GeneralButton value="Parcourir" />
                    </div>

                </div>
            </div>
        </section>
    );
}

