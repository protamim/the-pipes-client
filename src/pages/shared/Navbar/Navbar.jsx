import { NavLink } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import logoLight from "../../../assets/img/logo-light.png";
import NavLogin from "./NavLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Dashboard from "./Dashboard";
import { AiOutlineAlignRight } from "react-icons/ai";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [showHide, setShowHide] = useState(false);

  const handleShowHide = ()=> {
    setShowHide(!showHide)
  }

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <nav className="bg-gray-300">
        <div className="container mx-auto px-5">
          <div className="h-16 relative grid grid-cols-12 gap-8 items-center justify-center">
            {/* Navbar Logo */}
            <div className="col-span-6 md:col-span-2">
              <NavLink>
                <img className="w-24" src={logoLight} alt="the pipes" />
              </NavLink>
            </div>
            {/* Navbar Links */}
            <div className="col-span-10 hidden md:flex justify-end gap-10 items-center">
              <NavigationLinks />
              {/* Show dashboard for user */}
              {user && <Dashboard />}
              {/* Navbar Login */}
              <div>
                {/* login status */}
                {user ? (
                  <button onClick={handleLogOut}>Log Out</button>
                ) : (
                  <NavLogin />
                )}
              </div>
            </div>
            {/* Mobile Nav */}
            <div className={`${showHide?'block':'hidden'} absolute w-64 h-screen top-0 -left-5 z-[999999] bg-pink-400 px-5 pt-16 pb-8`}>
              <MobileNav />
            </div>
            {/* Outside click event */}
            <div onClick={()=>setShowHide(false)} className={`${showHide?'block':'hidden'} absolute min-h-screen w-full left-64 z-30 top-16`}></div>
            {/* Bar Icon for mobile */}
            <div onClick={handleShowHide} className="md:hidden col-span-6">
              <span className="flex justify-end text-2xl">
                <AiOutlineAlignRight />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
