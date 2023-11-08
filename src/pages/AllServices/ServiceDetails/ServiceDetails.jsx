import { useLoaderData } from "react-router-dom";
// Flowbite
("use client");
import { Button, Datepicker, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  // console.log(Object.keys(product).join(", "));
  const { serviceName, serviceImage, price, description } = product;

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const yourEmail = form.userEmail.value;
    const serviceImage = form.serviceImage.value;
    const price = form.price.value;
    const serviceArea = form.area.value;
    const date = form.date.value;

    const serviceInfo = {
    serviceName,
      yourEmail,
      serviceImage,
      price,
      serviceArea,
      date
    };
    console.log(serviceInfo);

    axios.post('http://localhost:3000/booking', serviceInfo)
    .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            text: 'Added the this service successfully!',
            icon: 'success'
          })
        }
    }).catch(err => {
        console.log(err);
    })

    // reset form after submision
    form.reset();
  };


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
          <form onSubmit={handleBooking} >
            <div className="grid gap-6 grid-cols-2">
              <h3 className="text-xl col-span-2 font-medium text-gray-900 dark:text-white">
                Add to your book list
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label value="Service Name" />
                </div>
                <TextInput
                  type="text"
                  name="serviceName"
                  defaultValue={serviceName}
                  readOnly
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Service Image" />
                </div>
                <TextInput name="serviceImage" defaultValue={serviceImage} readOnly />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your Email" />
                </div>
                <TextInput name="userEmail" defaultValue={user?.email} readOnly />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Pick a date" />
                </div>
                <Datepicker name="date" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Instuction" />
                </div>
                <TextInput name="area" placeholder="Your area" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Price" />
                </div>
                <TextInput name="price" defaultValue={price} readOnly />
              </div>
              <div className="w-full col-span-2">
                <Button type="submit" className="w-full">Purchase this</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ServiceDetails;
