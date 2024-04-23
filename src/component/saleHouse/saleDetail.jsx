import React from 'react';
import ImageVente from './../../assets/images/image vente.png';
import GeneralButton from '../primaryComponents/generalButton';
export default function SaleDetail() {
    return (
        <section className='sale-detail w-[100%] bg-gray-100 bg-opacity-90'>
            <div className='w-[80%] flex justify-center items-center bg-gray-500 min-h-screen gap-3rem'>
            <div className='w-[60%]'>
                <h3>Vendez vous-même votre maison</h3>
                <p>Décider de vendre votre maison vous-même est une bonne chose car,
                    il vous permet d’éviter de payer une commission d’agent inscripteur et surtout
                    d’avoir la flexibilité et le plein contrôle du début à la fin
                    Dans ce cas, vous êtes responsable de la préparation de la maison,
                    du marketing, des visites et des négociations.
                </p>
                <GeneralButton value='Mettre la maison en vente' />
            </div>
            <div className='w-[40%]'>
                <img src={ImageVente} alt="" />
            </div>
            </div>
            

        </section>
    );
}

