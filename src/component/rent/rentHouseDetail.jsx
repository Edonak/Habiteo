import { useLocation } from "react-router-dom";
import RentForm from "./rentForm";

export default function RentHouseDetail(datas) {
  const houseLocation = datas;

  const {state } =useLocation()
  const house = state && state.val;
  return (
    <section className='flex justify-center w-[100%]'>
        <div className="p-5 w-[50%]">
          <div>
              <div>
                <div>
                  <img src={house.photoUrl} alt="image maison" />
                </div>
                <div>
                  <p>La maison a {house.nombreDePiece}</p>
                  <p>Voici l`adresse de maison {house.adresse}</p>
                  <p>Nous decaissons la garentie de {house.garentie} mois</p>
                  <p>{house.propietaire}</p>
                  <p>Interesser? Pour toute visite {house.numero} </p>
                </div>
              </div>
          </div>
        </div> : <p>Wait</p>
      <RentForm />
    </section>
  );
}
