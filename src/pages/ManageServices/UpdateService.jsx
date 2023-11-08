import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateService = () => {
  const selectedService = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, serviceName, serviceImage, price, serviceArea, description } =
    selectedService;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const yourName = form.yourName.value;
    const yourEmail = form.yourEmail.value;
    const serviceImage = form.serviceImage.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.desc.value;
    const info = {
      serviceName,
      yourName,
      yourEmail,
      serviceImage,
      price,
      serviceArea,
      description,
    };
    // update existing service
    axios.put(`http://localhost:3000/services/${_id}`, info)
    .then(res => {
        console.log(res);
        if(res?.data?.modifiedCount>0){
            Swal.fire({
                text: 'Updated Successfully!',
                icon: 'success'
            })
        }
    })
  };

  return (
    <>
      <div className="bg-gray-100 text-black px-12 py-10 space-y-12">
        <div className="text-center w-full md:w-3/4 mx-auto space-y-4">
          <h2 className="text-3xl">Update this service</h2>
        </div>
        <div>
          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 text-xl">
                <span>Service Name</span>
                <input
                  className="input input-bordered input-accent bg-transparent"
                  type="text"
                  name="serviceName"
                  defaultValue={serviceName}
                  placeholder="Service Name"
                />
              </div>
              <div className="flex flex-col gap-2 text-xl">
                <span>Your Name</span>
                <input
                  className="input input-bordered input-accent bg-transparent"
                  type="text"
                  name="yourName"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2 text-xl text-black">
                <span>Your Email</span>
                <input
                  className="input input-bordered input-accent bg-transparent"
                  type="email"
                  name="yourEmail"
                  placeholder="Your Email"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2 text-xl">
                <span>Service Image</span>
                <input
                  className="input input-bordered input-accent bg-transparent"
                  type="url"
                  name="serviceImage"
                  placeholder="Service Image URL"
                  defaultValue={serviceImage}
                />
              </div>
              <div className="flex flex-col gap-2 text-xl">
                <span>Price</span>
                <input
                  className="input input-bordered input-accent bg-transparent"
                  type="text"
                  name="price"
                  placeholder="Price"
                  defaultValue={price}
                />
              </div>
              <div className="flex flex-col gap-2 text-xl">
                <span>Service Area</span>
                <input
                  className="input input-bordered input-accent bg-transparent"
                  type="text"
                  name="serviceArea"
                  placeholder="Service Area"
                  defaultValue={serviceArea}
                />
              </div>
              <div className="flex flex-col gap-2 text-xl md:col-span-2">
                <span>Short Desciption</span>
                <textarea
                  className="h-28 textarea textarea-secondary bg-transparent resize-none"
                  name="desc"
                  placeholder="Write a short desciption..."
                  defaultValue={description}
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-slate-500 w-full text-white text-2xl py-1"
              >
                <span>Update NOW</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateService;
