import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServicesCard = ({ product }) => {
  // console.log(Object.keys(product).join(", "));
  const { _id, serviceName, serviceImage, price, serviceArea, description } =
    product;

  return (
    <>
      <div className="bg-indigo-100 flex gap-3 flex-col justify-between">
        <div>
          <img className="h-52 w-full object-cover" src={serviceImage} alt="" />
        </div>
        <div className="px-2 space-y-4">
          <div>
            <h2 className="text-2xl">{serviceName}</h2>
          </div>
          <div>
            <p>{description.slice(0, 100)}...</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-lg">{serviceArea}</span>
            </div>
            <div>
              <p className="text-xl">${price}</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-gray-300 mb-4 mt-5 px-5 py-1">
                <Link to={_id}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ServicesCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ServicesCard;
