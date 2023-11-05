import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400"
                />
                <div className="flex justify-end text-xs dark:text-gray-400">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="block w-full bg-slate-400 p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
                Login
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FcGoogle />
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Don&apos;t have an account?
              <NavLink
                to={"/register"}
                className="underline dark:text-gray-100"
              >
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
