import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Datepicker, Label, Modal, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const ManageServicesCard = ({ product, refetch }) => {
  const { _id, serviceName, serviceImage } = product;
    const [openModal, setOpenModal] = useState(false);

    
    function onCloseModal() {
      setOpenModal(false);
    }
 
  const handleDelete = ()=> {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if(result.isConfirmed) {
        axios.delete(`http://localhost:3000/services/${_id}`)
        .then(res => {
          if(res?.data?.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your service has been deleted.",
              icon: "success"
            });
            refetch();
          }
        })
      }
    });
  }
  
  return (
    <>
      <div className="flex gap-3 justify-between items-center bg-indigo-100">
        <div className="flex items-center gap-6 justify-center">
          <div>
            <img className="h-44 w-64 object-cover" src={serviceImage} alt="" />
          </div>
          <div>
            <h2 className="text-xl">{serviceName}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 pr-4">
          <button>
            <Link to={`/update/${_id}`}>
            <span className="text-2xl">
              <BiEdit />
            </span></Link>
          </button>
          <button>
            <span onClick={handleDelete} className="text-2xl">
              <AiOutlineDelete />
            </span>
          </button>
        </div>
      </div>
      {/* Modal */}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form>
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
                  //   defaultValue={serviceName}
                  readOnly
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Service Image" />
                </div>
                <TextInput
                  name="serviceImage"
                  // defaultValue={serviceImage}
                  readOnly
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your Email" />
                </div>
                <TextInput
                  name="userEmail"
                  // defaultValue={user?.email}
                  readOnly
                />
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
                <TextInput
                  name="price"
                  // defaultValue={price}
                  readOnly
                />
              </div>
              <div className="w-full col-span-2">
                <Button type="submit" className="w-full">
                  Purchase this
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
ManageServicesCard.propTypes = {
  product: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
export default ManageServicesCard;
