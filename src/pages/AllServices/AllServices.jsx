import allServicesBg from "../../assets/img/all_services-bg.png";
import { IoMdSearch } from "react-icons/io";
import useServices from "../../Hooks/useServices";
import ServicesCard from "./ServicesCard/ServicesCard";
import { useState } from "react";
import Loading from "../../components/Loading";

const AllServices = () => {
  const { data, isLoading } = useServices();
  const defaultData = data?.slice(0, 8);
  const [loadData, setLoadData] = useState(defaultData);
  console.log(isLoading, defaultData, data);
  if (isLoading) {
    return <Loading />;
  }
  
  const fetchAll = () => {
    setLoadData(data);
  };

  return (
    <>
      {/* Filter section */}
      <section
        className="h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${allServicesBg})` }}
      >
        <div className="bg-white w-[540px] px-11 py-8 m-8 rounded-md">
          <div className="space-y-5">
            <h2 className="text-2xl text-center">
              Choose a service to get started.
            </h2>
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <div className="flex">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for a service (e.g. 'drain cleaning')"
                  className="flex flex-1 border sm:text-sm rounded-l-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri"
                />
                <span className="flex items-center px-3 cursor-pointer sm:text-sm rounded-r-md bg-slate-400 text-white dark:bg-gray-700">
                  <button className="text-lg">
                    <IoMdSearch />
                  </button>
                </span>
              </div>
            </fieldset>
          </div>
        </div>
      </section>
      {/* Services section */}
      <section className="py-10">
        <div className="container mx-auto px-5">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
            {data?.slice(0, loadData?.length).map((prod) => (
              <ServicesCard key={prod._id} product={prod} />
            ))}
          </div>
          {/* More Button */}
          <div className="text-center my-8">
            {data?.length > defaultData?.length && (
              <button
                onClick={fetchAll}
                className={`bg-indigo-500 px-6 p-1 text-gray-100 ${
                  data?.length == loadData?.length && "hidden"
                }`}
              >
                More
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllServices;
