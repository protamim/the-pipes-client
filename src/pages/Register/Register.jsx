const Register = () => {
  return (
    <>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl">Register</h3>
        <form className="container flex flex-col justify-center items-center mx-auto space-y-12">
          <fieldset className="p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Your Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="*****"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-3">
                <label className="text-sm">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  placeholder="photo url"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
            <button className="block w-full mt-7 bg-slate-400 p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
            Register
          </button>
          </fieldset>
        </form>
        </div>
      </section>
    </>
  );
};

export default Register;
