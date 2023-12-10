import approchBg from '../../../assets/img/approch-bg.jpg'

const Approch = () => {
  return (
    <>
      <section style={{backgroundImage:`url(${approchBg})`}} className='bg-cover bg-left-top'>
        <div className="container mx-auto px-5">
          <div className="grid gap-8 grid-cols-12 items-center min-h-[544px] w-full">
            <div className="col-span-12 md:col-span-6 space-y-7">
              <h4 className='text-base text-indigo-400'>PLUMBING COMPANY</h4>
              <h2 className='text-5xl'>Innovative <br /> Approach</h2>
              <p className='text-lg'>Professional installation is key to the impeccable functioning of your pipes, faucets and heaters. Let us take care of the issues in your homes and offices today.</p>
              <button className='bg-indigo-500 px-6 py-2 rounded-md text-white'>Request an estimate</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approch;
