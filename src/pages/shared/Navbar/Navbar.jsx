import { NavLink } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import logoLight from "../../../assets/img/logo-light.png";
import NavLogin from "./NavLogin";

const Navbar = () => {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <nav className="bg-gray-300">
        <div className="container mx-auto px-5">
          <div className="h-16 grid grid-cols-12 gap-8 items-center">
            {/* Navbar Logo */}
            <div className="col-span-2">
              <NavLink>
                <img className="w-24" src={logoLight} alt="the pipes" />
              </NavLink>
            </div>
            {/* Navbar Links */}
            <div className="col-span-10 flex justify-end gap-10">
              <NavigationLinks />
              {/* Navbar Login */}
              <div>
                <NavLogin />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
