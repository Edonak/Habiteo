import { useParams } from "react-router-dom";
import {housePurchase} from "./../../datas/homes-datas.json"
import PurchaseDetail from "./purchaseDetail";

export default function PurchaseContainer() {
    const {id} = useParams;
    const usernames = housePurchase.find((usernames)=> usernames.id === parseInt(id))
  return (
    <section className='p-4'>
    <div>
        <h3 className='text-[1.3rem] font-medium text-[#004AAD]'>Louer la maison</h3>
        <p>Demander la location de maison</p>
        </div>
      <section>
        <PurchaseDetail datas={usernames} />
      </section>
    </section>
  )
}
