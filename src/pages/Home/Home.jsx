import Approch from "./Approch/Approch";
import Banner from "./Banner/Banner";
import PlumberHome from "./PlumberHome/PlumberHome";
import PopularServices from "./PopularServices/PopularServices";
import PricePlan from "./PricePlan/PricePlan";


const Home = () => {
    return (
        <>
            <Banner />
            <PlumberHome />
            <PopularServices />
            <Approch />
            <PricePlan />
        </>
    );
};

export default Home;