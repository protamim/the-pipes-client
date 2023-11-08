import useServices from "../../Hooks/useServices";
import ManageServicesCard from "./ManageServicesCard/ManageServicesCard";

const ManageServices = () => {
  const { data, isLoading, refetch } = useServices();

  // Loading
  if (isLoading == true) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    );
  }
  return (
    <>
      <section className="my-16">
        <div className="container mx-auto px-5">
            <h2 className="text-center text-3xl mb-8">Manage Your Services</h2>
          <div className="grid gap-8 grid-cols-2">
            {data.map((prod) => (
              <ManageServicesCard key={prod._id} product={prod} refetch={refetch} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageServices;
