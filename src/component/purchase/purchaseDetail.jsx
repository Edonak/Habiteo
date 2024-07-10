import RentForm from "../rent/rentForm";

export default function PurchaseDetail(datas) {
    const housePurchase = datas; 
  return (
    <section className="flex justify-center w-[100%]">
    <div className="p-5 w-[50%]">
          <div>
              <div>
                <div>
                  <img src={housePurchase.photoUrl} alt="image maison" />
                </div>
                <div>
                  <p>La maison a {housePurchase.nombreDePiece}</p>
                  <p>Voici l`adresse de maison hhhhh {housePurchase.adresse}</p>
                  <p>Nous decaissons la garentie de {housePurchase.garentie} mois</p>
                  <p>{housePurchase.propietaire}</p>
                  <p>Interesser? Pour toute visite {housePurchase.numero} </p>
                </div>
              </div>
          </div>
        </div> : <p>Wait</p>
    <RentForm />
    </section>
  )
}
