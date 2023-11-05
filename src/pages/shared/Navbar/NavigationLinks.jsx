import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      <ul className="flex gap-6">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavigationLinks;
