import React from 'react';
import GeneralButton from '../primaryComponents/generalButton';

export default function HouseContainers() {
    return (
        <section className='flex w-[100%]'>
        <div className='w-[25%]'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
            <h4>Vendre une maison</h4>
                <p></p>
                <GeneralButton value= "Vendre" />
            </div>
        </div>
    </section>
    );
}
