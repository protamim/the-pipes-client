import useBooking from "../../../Hooks/useBooking";
import Loading from "../../../components/Loading";

const Pending = () => {
  const { data, isLoading } = useBooking();
  if (isLoading) {
    return <Loading />;
  }
  const other = data?.filter((book) => book?.yourEmail !== "chaya@deho.com");
  console.log(other);

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {other.length == 0 && <h3 className="text-3xl">No Data Found!</h3>}
          {other?.map((book) => (
            <div key={book._id} className="space-y-3">
              <div>
                <img className="h-48" src={book?.serviceImage} alt="" />
              </div>
              <div>
                <h3 className="text-xl">{book?.serviceName}</h3>
              </div>
              <div>
                <h5>${book?.price}</h5>
                <p>{book?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pending;
