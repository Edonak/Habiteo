import homeDatas from '../../datas/homes-datas.json';
import { NavLink } from 'react-router-dom';

export default function HouseLocation() {

    return (
        <section className=" w-[100%] mb-12 p-2">
            <div className='pb-12 pl-12'>
                <h2 className='text-[1.3rem] font-medium text-[#004AAD]'>Location Maison</h2>
                <p>Louer une maison de qualité en toute sécurité</p>
            </div>
            {homeDatas.houseLocation.length ? <div className="flex w-[100%] justify-center ">

                <div className='flex flex-wrap w-[80%] gap-9 justify-center'>
                    {homeDatas.houseLocation.map((item, index) => (
                        <div key={index} className='w-[20%] border-solid rounded-xl sell-card gap-10'>
                            <NavLink to={`/${item.renthouse}`}>
                                <img src={item.photoUrl} alt="" className="w-[100%] h-[20vh] rounded-t-xl" />
                            </NavLink>
                            <div className='sell-card-content px-2'>
                                <p className='font-bold'>{item.prix}</p>
                                <p className='text-sm'>{item.nombreDePiece}</p>
                                <p className='text-sm'>{item.adresse}</p>
                                <p className=''>{item.propietaire}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div> : <p>Wait</p>}
        </section>
    );
}
