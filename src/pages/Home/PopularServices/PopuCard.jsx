import PropTypes from "prop-types";

const PopuCard = ({ service }) => {
  // console.log(Object.keys(service).join(","));
  const {
    serviceName,
    serviceDescription,
    viewDetail,
    servicePrice,
    serviceImage,
  } = service;
  return (
    <>
      <div className="col-span-12 md:col-span-3 space-y-3">
        <img className="h-44 w-full" src={serviceImage} alt="" />
        <h2 className="text-xl">{serviceName}</h2>
        <p>{serviceDescription}</p>
        <h4>{servicePrice}</h4>
        <button className="bg-indigo-400 px-4 py-1">
         {viewDetail}
          </button>
      </div>
    </>
  );
};
PopuCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default PopuCard;
