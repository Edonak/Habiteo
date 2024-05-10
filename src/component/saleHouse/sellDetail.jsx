import React from 'react';
import ImageVente from './../../assets/images/image vente.png';
import { Link } from 'react-router-dom';
import ButtonVente from '../primaryComponents/buttonVente';
export default function SellDetail({ onClick }) {
    return (
        <section className='sale-detail w-[100%] bg-gray-100 bg-opacity-60 flex flex-col items-center'>
            <div className='w-[80%] h-[60vh] flex justify-between items-center gap-3rem'>
                <div className='w-[50%] flex flex-col items-center text-justify'>
                    <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Vendez vous-même votre maison</h2>
                    <p className='p-7'>Décider de vendre votre maison vous-même est une bonne chose car,
                        il vous permet d’éviter de payer une commission d’agent inscripteur et surtout
                        d’avoir la flexibilité et le plein contrôle du début à la fin. <br/>
                        Dans ce cas, vous êtes responsable de la préparation de la maison,
                        du marketing, des visites et des négociations, n'ignorant pas que vous n'avez pas d'agents pour la suivie.
                    </p>
                    <Link to='/login'> <ButtonVente value='Mettre la maison en vente' onClick={onClick}/> </Link>
                </div>
                <div className='w-[4=50%]'>
                    <img src={ImageVente} alt="" />
                </div>
            </div>
        </section>
    );
}

