import RentForm from "./rentForm";

export default function RentHouseDetail(datas) {
  const rentHouse = datas;
  return (
    <section className='flex justify-center w-[100%]'>
      <div className="p-5 w-[50%]">
        <div>
          <img src={rentHouse.photoUrl} alt="image maison" />
        </div>
        <div>
          <p>La maison a {rentHouse.nombreDePiece}</p>
          <p>Voici l`adresse de maison {rentHouse.adresse}</p>
          <p>Nous decaissons la garentie de {rentHouse.garentie} mois</p>
          <p>{rentHouse.propietaire}</p>
          <p>Interesser? Pour toute visite {rentHouse.numero} </p>
        </div>
      </div>
      <RentForm />
    </section>
  )
}
