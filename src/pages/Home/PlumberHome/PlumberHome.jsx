import { Button } from "flowbite-react";
import plumber from "../../../assets/img/plumber.jpg";
import { Link } from "react-router-dom";

const PlumberHome = () => {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
            <div className="flex-1 order-2 md:-order-none">
              <img className="h-[480px] object-cover object-left-top" src={plumber} alt="plumber" />
            </div>
            <div className="flex-1">
             <div className="space-y-4">
             <span>PLUMBING PARTS</span>
              <h2 className="text-6xl">Plumbing Services & Installation</h2>
              <p className="text-xl">
                Today, the technology allows creating all types of plumbing
                parts and accessories for your home and office. We offer premium
                products and installation service.
              </p>
              <Button color="blue">
                <Link className="text-xl">Request a plumber</Link>
              </Button>
             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumberHome;
