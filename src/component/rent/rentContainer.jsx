import {houseLocation} from './../../datas/homes-datas.json'
import { useParams } from 'react-router-dom';
import RentHouseDetail from './rentHouseDetail';

export default function RentContainer() {
    const {id} = useParams;
    const usernames = houseLocation.find((usernames)=> usernames.id === parseInt(id))
  return (
    <main className='p-4'>
      <div>
        <h3 className='text-[1.3rem] font-medium text-[#004AAD]'>Louer la maison</h3>
        <p>Demander la location de maison</p>
        </div>
      <section>
        <RentHouseDetail datas={usernames}/>
      </section>
    </main>
    
  )
}
