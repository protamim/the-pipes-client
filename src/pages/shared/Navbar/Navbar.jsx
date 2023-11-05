import { NavLink } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import logoLight from "../../../assets/img/logo-light.png";
import NavLogin from "./NavLogin";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Dashboard from "./Dashboard";


const Navbar = () => {
  const {logOut, user} = useContext(AuthContext);
  console.log(user);

  const handleLogOut = ()=> {
    logOut().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
  
  return (
    <>
      <nav className="bg-gray-300">
        <div className="container mx-auto px-5">
          <div className="h-16 grid grid-cols-12 gap-8 items-center justify-center">
            {/* Navbar Logo */}
            <div className="col-span-2">
              <NavLink>
                <img className="w-24" src={logoLight} alt="the pipes" />
              </NavLink>
            </div>
            {/* Navbar Links */}
            <div className="col-span-10 flex justify-end gap-10 items-center">
              <NavigationLinks />
              {/* Show dashboard for user */}
              {user && <Dashboard />}
              {/* Navbar Login */}
              <div>
              {/* login status */}
                {user ?
                <button onClick={handleLogOut}>Log Out</button>
              :
              <NavLogin />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
