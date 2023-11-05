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
      <section className="my-10">
        <div className="container mx-auto px-5">
          <div className="grid gap-8 grid-cols-12">
            {services.map((service) => (
              <PopuCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularServices;
