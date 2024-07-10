import Navbar from '../component/header/navbar';
import Footer from '../component/footer/footer';
import HouseLocation from '../component/containers/houseLocation';
import RentHouseSearch from '../component/primaryComponents/rentHouseSearch';

export default function RentalHouse() {


    return (
        <section>
            <Navbar />
            <main>
                <RentHouseSearch />
                <div>
                    <HouseLocation />
                </div>
            </main>
            <Footer />
        </section>
    );
}