import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import PurchaseContainer from "./purchaseContainer";

export default function Purchase() {
    return (
        <main>
            <section>
                <Navbar />
            </section>
            <section className=' h-[auto]'>
                <PurchaseContainer />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}
