import RentForm from "./rentForm";

export default function RentHouseDetail(datas) {
  const houseLocation = datas;
  return (
    <section className='flex justify-center w-[100%]'>
        <div className="p-5 w-[50%]">
          <div>
              <div>
                <div>
                  <img src={houseLocation.photoUrl} alt="image maison" />
                </div>
                <div>
                  <p>La maison a {houseLocation.nombreDePiece}</p>
                  <p>Voici l`adresse de maison {houseLocation.adresse}</p>
                  <p>Nous decaissons la garentie de {houseLocation.garentie} mois</p>
                  <p>{houseLocation.propietaire}</p>
                  <p>Interesser? Pour toute visite {houseLocation.numero} </p>
                </div>
              </div>
          </div>
        </div> : <p>Wait</p>
      <RentForm />
    </section>
  );
}
