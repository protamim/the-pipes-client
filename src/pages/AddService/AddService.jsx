
import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const AddService = () => {
    const {user} = useContext(AuthContext)

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const yourName = form.yourName.value;
    const yourEmail = form.yourEmail.value;
    const serviceImage = form.serviceImage.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.desc.value;

    const prodInfo = {
    serviceName,
      yourName,
      yourEmail,
      serviceImage,
      price,
      serviceArea,
      description
    };
    console.log(prodInfo);

    // fetch("https://brew-bite-server.vercel.app/products", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(prodInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         text: "Added the product successfully!",
    //         icon: "success",
    //       });
    //     }
    //     console.log(data);
    //   });

    // reset form after submision
    // form.reset();
  };

  return (
    <section>
      <div className="container mx-auto px-5">
        {/* Breadcam start */}
        <div className="my-8 text-xl">
          <Link to="/" className="flex gap-3 items-center">
            <BiArrowBack />
            <p> Back to Home</p>
          </Link>
        </div>
        {/* Breadcam end */}
        <div className="bg-gray-100 text-black px-12 py-10 space-y-12">
          <div className="text-center w-full md:w-3/4 mx-auto space-y-4">
            <h2 className="text-3xl">Add New Product</h2>
            <p className="text-xl">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div>
            <form onSubmit={handleAddProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-xl">
                  <span>Service Name</span>
                  <input
                    className="input input-bordered input-accent bg-transparent"
                    type="text"
                    name="serviceName"
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
                  />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                  <span>Price</span>
                  <input
                    className="input input-bordered input-accent bg-transparent"
                    type="text"
                    name="price"
                    placeholder="Price"
                  />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                  <span>Service Area</span>
                  <input
                    className="input input-bordered input-accent bg-transparent"
                    type="text"
                    name="serviceArea"
                    placeholder="Service Area"
                  />
                </div>
                <div className="flex flex-col gap-2 text-xl md:col-span-2">
                  <span>Short Desciption</span>
                  <textarea
                    className="h-28 textarea textarea-secondary bg-transparent resize-none"
                    name="desc"
                    placeholder="Write a short desciption..."
                  ></textarea>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-slate-500 w-full text-white text-2xl py-1">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
