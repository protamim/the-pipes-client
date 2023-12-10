import { useContext } from "react";
import Dashboard from "./Dashboard";
import NavigationLinks from "./NavigationLinks";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import NavLogin from "./NavLogin";

const MobileNav = () => {
  const { logOut, user } = useContext(AuthContext);
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
      {/* Navbar Links */}
      <div className="flex flex-col gap-5">
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
    </>
  );
};

export default MobileNav;
