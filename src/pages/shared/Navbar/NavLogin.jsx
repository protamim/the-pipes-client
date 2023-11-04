import { NavLink } from "react-router-dom";

const NavLogin = () => {
  return (
    <>
      <button>
        <NavLink to={"/login"}>Login</NavLink>
      </button>
    </>
  );
};

export default NavLogin;
