import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      <ul className="md:flex gap-6 space-y-5 md:space-y-0">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/all-services"}>Services</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavigationLinks;
