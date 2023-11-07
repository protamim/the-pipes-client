import { useLoaderData } from "react-router-dom";
// Flowbite
("use client");
import { Button, Datepicker, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);

  function onCloseModal() {
    setOpenModal(false);
  }

  const product = useLoaderData();
  // console.log(Object.keys(product).join(", "));
  const {
    _id,
    serviceName,
    yourName,
    yourEmail,
    serviceImage,
    price,
    serviceArea,
    description,
  } = product;

  return (
    <>
      <section className="my-14">
        <div className="container mx-auto px-5">
          <div className="space-y-6">
            <img
              className="h-80 w-full object-cover"
              src={serviceImage}
              alt=""
            />
            <h2 className="text-2xl font-semibold">{serviceName}</h2>
            <p className="text-lg">{description}</p>
            <div>
              <span className="text-xl">Price: ${price}</span>
            </div>
            <Button className="w-full" onClick={() => setOpenModal(true)}>
              Book Now
            </Button>
          </div>
        </div>
      </section>
      {/* Modal */}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="grid gap-6 grid-cols-2">
            <h3 className="text-xl col-span-2 font-medium text-gray-900 dark:text-white">
              Add to your book list
            </h3>
            <div>
              <div className="mb-2 block">
                <Label value="Service Name" />
              </div>
              <TextInput defaultValue={serviceName} readOnly />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Service Image" />
              </div>
              <TextInput defaultValue={serviceImage} readOnly />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your Email" />
              </div>
              <TextInput defaultValue={user?.email} readOnly />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Pick a date" />
              </div>
              <Datepicker />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Instuction" />
              </div>
              <TextInput placeholder="Input area" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Price" />
              </div>
              <TextInput defaultValue={price} readOnly />
            </div>
            <div className="w-full col-span-2">
              <Button className="w-full">Purchase this</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ServiceDetails;
