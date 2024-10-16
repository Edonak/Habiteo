import GeneralButton from '../primaryComponents/generalButton';
import LocationImage from './../../assets/images/Image card louer.svg';
import ParcoursImage from './../../assets/images/Image card parcourir.svg';
import VenteImage from './../../assets/images/image card vendre.svg';
import { NavLink } from 'react-router-dom';

export default function HouseDetail() {
    return (
        <section className='text-justify houseDetail'>
            <div className='border-solid rounded-3xl shadow-2xl house-card'>
                <figure>
                    <img src={VenteImage} alt="" />
                </figure>
                <div className='p-4'>
                    <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Vendre une maison</h4>
                    <p>Quel que soit le chemin que vous empruntez pour vendre votre maison,
                        nous vous aidons pour que votre vente se passe en toute sécurité
                        et aboutir à une bonne réussite!</p>
                    <div >
                        <NavLink to='/sell' className='btn flex flex-col items-center pt-7'> <GeneralButton value="Vendre" /></NavLink>
                    </div>
                </div>
            </div>
            <div className='border-solid rounded-3xl shadow-2xl house-card'>
                <figure>
                    <img src={LocationImage} alt="image maison à louer" />
                </figure>
                <div className='p-4'>
                    <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Louer une maison</h4>
                    <p>Nous créons une expérience en ligne transparente,
                        depuis les achats sur le grand réseau de location
                        jusqu'à la demande d'inscription et le payement du loyer!</p>
                    <div>
                        <NavLink to='/rent' className='btn flex flex-col items-center pt-7'> <GeneralButton value="Louer" /> </NavLink>
                    </div>
                </div>
            </div>
            <div className='border-solid rounded-3xl shadow-2xl house-card'>
                <figure>
                    <img src={ParcoursImage} alt="parcourir les images" />
                </figure>
                <div className='p-4'>
                    <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Parcourir des maisons</h4>
                    <p>Trouvez votre place avec une expérience photo immersive
                        et le plus grand nombre d'annonces, y compris des choses
                        que vous ne trouverez nulle part ailleurs.!</p>
                    <div>
                    <NavLink to='/display' className='btn flex flex-col items-center pt-7'> <GeneralButton value="Parcourir" /> </NavLink>
                    </div>

                </div>
            </div>
        </section>
    );
}

