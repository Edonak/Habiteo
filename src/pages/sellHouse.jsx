import Navbar from '../component/header/navbar';
import HeroSectionSale from '../component/heroSection/heroSectionSale';
import Footer from '../component/footer/footer';
import SellDetail from '../component/saleHouse/sellDetail';
import imageCommentVendre from './../assets/images/1000.jpg';
import imageEtapeVente from './../assets/images/10001.png';
import imageApprendre from './../assets/images/shutterstock_1069408551.jpg'


export default function SellHouse() {
    return (
        <section>
            <Navbar />
            <main>
                <HeroSectionSale />
                <SellDetail />
                <section className='text-justify details'>
                    <div className='w-[25%] flex flex-col items-center sell-card'>
                        <div className=''>
                            <img src={imageEtapeVente} alt="image comment vendre une maison" />
                        </div>
                        <div className='p-6 sell-card-content'>
                            <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Comment vendre une maison rapidement?</h4>
                            <p>Besoin de vendre votre maison rapidement ? Pensez aux investisseurs ou aux iBuyers. Sinon, les ventes rapides de maisons reposent sur une tarification précise, un nettoyage professionnel, un marketing et une négociation. Suivez ces neuf étapes pour vendre rapidement.</p>
                        </div>
                    </div>
                    <div className='w-[25%] flex flex-col items-center sell-card'>
                        <div>
                            <img src={imageCommentVendre} alt="image comment louer maison à louer" />
                        </div>
                        <div className='p-6 sell-card-content'>
                            <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Etapes pour vendre une maison</h4>
                            <p>Vendre une maison est complexe. Suivez ces 10 étapes essentielles pour vendre une maison FSBO ou avec un agent. Ce guide pour les vendeurs d'une première maison détaille comment fixer un prix compétitif pour votre maison, comment procéder à la vente, éviter les obstacles courants à la clôture et bien plus encore.!</p>
                        </div>
                    </div>
                    <div className='w-[25%] flex flex-col items-center sell-card'>
                        <div>
                            <img src={imageApprendre} alt="parcourir les images" />
                        </div>
                        <div className='p-6 sell-card-content'>
                            <h4 className='text-[1.3rem] font-medium pb-4 text-center'>Apprendre en profondeur</h4>
                            <p>Trouvez votre place avec une expérience photo immersive
                                et le plus grand nombre d'annonces, y compris des choses
                                que vous ne trouverez nulle part ailleurs, en apprenant plus du debut, au cheminement, jusqu'au du contract d'achat tout comme du bail de votre maison sans subir une perte!</p>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </section>
    );
}