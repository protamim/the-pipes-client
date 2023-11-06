import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopuCard = ({ service }) => {
  // console.log(Object.keys(service).join(","));
  const {
    id,
    serviceName,
    serviceDescription,
    viewDetail,
    servicePrice,
    serviceImage,
  } = service;
  return (
    <>
      <div className="col-span-3">
        <img src={serviceImage} alt="" />
        <h2>{serviceName}</h2>
        <p>{serviceDescription}</p>
        <h4>{servicePrice}</h4>
        <button>
          <Link to={'/view-details'}>{viewDetail}</Link>
          </button>
      </div>
    </>
  );
};
PopuCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default PopuCard;
