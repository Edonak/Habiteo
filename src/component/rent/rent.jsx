import {houseLocation} from './../../datas/homes-datas.json'
import Navbar from '../header/navbar';
import RentContainer from './../rent/rentContainer';
import Footer from './../footer/footer';

export default function Rent() {
    const houseSelectActive = 1;
    const dataHouseSelectActive = houseLocation.find((houseData)=> houseData.id === parseInt(houseSelectActive))
  return (
    <main>
      <section>
      <Navbar />
      </section>
      <section className=' h-[auto]'>
        <RentContainer />
      </section>
      <section>
        <Footer />
      </section>
    </main>
    
  )
}
