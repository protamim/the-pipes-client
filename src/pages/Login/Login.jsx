import { NavLink, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { MdDownloadDone } from 'react-icons/md'
// Flowbite
("use client");
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import Swal from "sweetalert2";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [signInSuccess, setSignInSuccess] = useState("");
  const [signInErr, setSignInErr] = useState("");
  const { logIn, socialSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const hideShow = () => {
  //   setShowPass(!showPass);
  // };

  const googleSignIn = (provider) => {
    socialSignIn(provider)
      .then(() => {
        setSignInSuccess("Signed in successfully!");
        setSignInErr("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setSignInErr(err.message);
        setSignInSuccess("");
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logIn(email, password)
      .then((res) => {
        setSignInSuccess("Signed in successfully!");
        setSignInErr("");
        navigate(location?.state ? location.state : "/");
        console.log(res);
        Swal.fire({
          text: 'Login successed!',
          icon: 'success'
        })
      })
      .catch((err) => {
        setSignInErr("Invalid login credentials");
        setSignInSuccess("");
        console.log(err);
      });
  };

  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400"
                />
              </div>
              {/* Shows validation message */}
              {signInErr && (
                <Alert color="failure" icon={HiInformationCircle}>
                  <span className="font-medium">{signInErr}</span>
                </Alert>
              )}
              {signInSuccess && (
                <Alert color="success" icon={MdDownloadDone}>
                <span className="font-medium">{signInSuccess}</span>
              </Alert>
              )}
              <button
                className="block w-full bg-slate-400 p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400"
              >
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
                onClick={() => googleSignIn(provider)}
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
