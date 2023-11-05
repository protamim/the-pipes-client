import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
// Flowbite
'use client';
import { HiInformationCircle } from 'react-icons/hi';
import {MdOutlineFileDownloadDone} from 'react-icons/md'
import { Alert } from 'flowbite-react';
import { info } from "autoprefixer";

const Register = () => {
  const { createAccount, setReload, userProfile } = useContext(AuthContext);
  const [regErr, setRegErr] = useState("");
  const [regSuccess, setRegSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(userName, email, password, photo);

    // prevent to set weak password
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(password)) {
      return setRegErr("Password must not contain Whitespaces.");
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password)) {
      return setRegErr("Password must have at least one Uppercase Character.");
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(password)) {
      return setRegErr("Password must have at least one Lowercase Character.");
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(password)) {
      return setRegErr("Password must contain at least one Digit.");
    }

    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password)) {
      return setRegErr("Password must contain at least one Special Symbol.");
    }

    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(password)) {
      return setRegErr("Password must be 10-16 Characters Long.");
    }

    // let regsiter a user
    createAccount(email, password)
      .then((userCredential) => {
        // Update a user's profile
        userProfile({
          displayName: userName,
          photoURL: photo,
        })
          .then(() => {
            setReload(true);
            console.log("Profile updated");
          })
          .catch((err) => {
            console.error(err);
          });
        console.log(userCredential.user);
        setRegSuccess("Registered successfully!");
        setRegErr("");
      })
      .catch((err) => {
        console.log(err);
        setRegErr(err.message);
        setRegSuccess("");
      });
  };

  return (
    <>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl">Register</h3>
          <form
            onSubmit={handleRegister}
            className="container flex flex-col justify-center items-center mx-auto space-y-12"
          >
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
                {/* show a validation message */}
                {regErr && (
                  <Alert className=" col-span-6" color="failure" icon={HiInformationCircle}>
                    <span className="font-medium">{regErr}</span>
                  </Alert>
                )}
                {/* For success */}
                {regSuccess && (
                  <Alert className="col-span-6" color={info} icon={MdOutlineFileDownloadDone}>
                    <span className="font-semibold">{regSuccess}</span>
                  </Alert>
                )}
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
