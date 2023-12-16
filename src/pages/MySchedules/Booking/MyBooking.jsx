import useBooking from "../../../Hooks/useBooking";
import Loading from "../../../components/Loading";

const MyBooking = () => {
  const { data, isLoading } = useBooking();
  console.log(data);


  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="space-y-5 md:space-y-0">
          {data?.map((ser) => (
            <div key={ser._id} className="bg-slate-200 grid grid-cols-3 gap-5 items-center justify-end">
              <div>
                <img src={ser?.serviceImage} alt="" />
              </div>
              <div>
                <h3>{ser?.serviceName}</h3>
              </div>
              <div>
                <h5>{ser?.price}</h5>
                <p>{ser?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyBooking;
