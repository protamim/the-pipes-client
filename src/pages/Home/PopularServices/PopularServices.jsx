import { useEffect, useState } from "react";
import PopuCard from "./PopuCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("popularServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
    <>
      <section className="my-10 bg-gray-100">
        <div className="container mx-auto px-5">
          <div className="grid gap-8 grid-cols-12">
            <div className="col-span-12 text-center">
              <h4>WHAT CAN WE HELP YOU WITH TODAY?</h4>
              <h2 className="text-5xl">What Are Your Needs?</h2>
            </div>
            {services.map((service) => (
              <PopuCard key={service.id} service={service} />
            ))}
            <button className="col-span-12">Show All</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularServices;
