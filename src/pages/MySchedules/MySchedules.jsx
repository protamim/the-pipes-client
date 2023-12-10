import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import MyFooter from "../shared/Footer/MyFooter";

const MySchedules = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <section className="my-14">
        <div className="container mx-auto px-5">
          <div className="grid gap-8 grid-cols-12">
            <div className="col-span-3 min-h-screen">
              <div className="flex flex-col gap-6 py-8 px-5">
                <NavLink to={"/my-schedules/booking"} className={`max-w-max text-xl`}>
                  My Booking
                </NavLink>
                <NavLink to={"/my-schedules/pending"} className={`max-w-max text-xl`}>
                  My Pending Works
                </NavLink>
              </div>
            </div>
            <div className=" col-span-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <MyFooter />
    </>
  );
};

export default MySchedules;
