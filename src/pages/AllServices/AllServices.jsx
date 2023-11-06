import allServicesBg from "../../assets/img/all_services-bg.png";
import {IoMdSearch} from 'react-icons/io'

const AllServices = () => {
  return (
    <>
    {/* Filter section */}
      <section
        className="h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${allServicesBg})` }}
      >
        <div className="bg-white w-[540px] px-11 py-8 m-8 rounded-md">
          <div className="space-y-5">
            <h2 className="text-2xl text-center">Choose a service to get started.</h2>
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
                    <IoMdSearch/>
                  </button>
                </span>
              </div>
            </fieldset>
          </div>
        </div>
      </section>
      {/* Services section */}
      <section className="min-h-[40vh] flex justify-center items-center">
        <div>
            <h3>You have to show the services/filtered services in this section</h3>
        </div>
      </section>
    </>
  );
};

export default AllServices;
