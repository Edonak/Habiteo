import RentForm from "./rentForm";
import RentHouse from "./../../datas/homes-datas.json"

export default function RentHouseDetail(datas) {
  return (
    <section className='flex justify-center w-[100%]'>
      {RentHouse.houseLocation.length ?
        <div className="p-5 w-[50%]">
          <div>
            {RentHouse.houseLocation.map((item, index) => (
              <div key={index}>
                <div>
                  <img src={item.photoUrl} alt="image maison" />
                </div>
                <div>
                  <p>La maison a {item.nombreDePiece}</p>
                  <p>Voici l`adresse de maison {item.adresse}</p>
                  <p>Nous decaissons la garentie de {item.garentie} mois</p>
                  <p>{item.propietaire}</p>
                  <p>Interesser? Pour toute visite {item.numero} </p>
                </div>
              </div>
            ))}
          </div>
        </div> : <p>Wait</p>
    }
      <RentForm />
    </section>
  );
}
