// flowbite
import { Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Dropdown label="Dashboard" dismissOnClick={false}>
        <Dropdown.Item>
        <NavLink to={"/add-service"}>Add Services</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
        <NavLink to={"/manage-services"}>Manage Services</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
        <NavLink to={"/schedule"}>My Schedules</NavLink>
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default Dashboard;
