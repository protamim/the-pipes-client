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
        <li>
          <NavLink to={"/add-service"}>Add A Service</NavLink>
        </li>
        <li>
          <NavLink to={"/manage-services"}>Manage Services</NavLink>
        </li>
        <li>
          <NavLink to={"/schedule"}>My Schedule</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavigationLinks;
