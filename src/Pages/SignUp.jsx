import React, { SyntheticEvent, useRef, useState } from "react";
import Logo from "../../public/logo.svg";
import { Link, Navigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SignUp = () => {
  const form = useRef();
  const [accountType, setAccountType] = useState("seeker");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState("");
  const [emailError, setEmailError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    password === confirmPassword
      ? (Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        }).fire({
          icon: "success",
          title: `Please Verfiy your account, We have send a verification email`,
        }),
        emailjs
          .sendForm(
            "service_ax33x5n",
            "template_d6r4b7t",
            form.current,
            "SjRrqqZaLK6qvI9w0"
          )
          .then(
            async (result) => {
              const res = await fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  accountType,
                  username,
                  email,
                  password,
                }),
              });
              if (res.status === 500) {
                setEmailError(
                  "There is already an account with this email addres"
                );

                console.log(
                  `${res.status} ----------------------this is the fetch respond haha`
                );
              }

              //   setRedirect(true);
            },
            (error) => {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                },
              });
              Toast.fire({
                icon: "error",
                title: "Failed to send an email",
              });
            }
          ),
        // sending email verification
        console.log(accountType, username, email, password))
      : setErr("Please Insert the same passwords");
  };
  if (redirect) {
    return <Navigate to="/signin" replace={true} />;
  }

  return (
    <div className="flex justify-center w-full h-screen bg-[#f1f4f8]">
      <div className="hidden lg:flex flex-col h-full w-1/2 items-center justify-center bg-[#f1f4f8] gap-4">
        <h1 className="text-5xl font-bold ">Land Your Job</h1>
        <p className="xl:px-24 px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          excepturi alias porro, quod quibusdam libero voluptate aut deserunt
          perferendis quaerat magni quos ipsum! Tempore nulla libero incidunt
          accusamus esse qui?
        </p>
        <h1 className="font-bold xl:px-24 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          vero.
        </h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Find Your Perfect Job! Please enter you details.
        </p>
        <p className="font-light text-sm text-gray-500 mt-4">
          surafelmohammed66@gmail.com.
        </p>
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className=" w-11/12 max-w-[700px] p-10 m-20 rounded-3xl bg-white border-2 border-gray-100">
          <h1 className="text-4xl font-semibold">Create Account</h1>
          <p className="font-medium text-base text-gray-500 mt-2">
            Please enter you details.
          </p>
          <form ref={form} onSubmit={submit}>
            <div className="mt-2">
              <div className="w-full flex items-center justify-center py-3 ">
                <button
                  className={`flex-1 p-2 border-2 border-gray-100 rounded-xl text-sm ${
                    accountType === "seeker"
                      ? "bg-[#1d4fd862] text-blue-900 font-semibold"
                      : "bg-white border border-blue-400"
                  }`}
                  onClick={() => setAccountType("seeker")}
                >
                  User Account
                </button>
                <button
                  className={`flex-1 p-2 border-2 border-gray-100 rounded-xl text-sm ${
                    accountType !== "seeker"
                      ? "bg-[#1d4fd862] text-blue-900 font-semibold"
                      : "bg-white border border-blue-400"
                  }`}
                  onClick={() => setAccountType("company")}
                >
                  Company Account
                </button>
              </div>
              <div className="flex flex-col mt-3">
                <label className="text-lg font-medium">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <p className="text-red-500 text-sm">{emailError}</p>
              </div>
              <div className="flex flex-col mt-3">
                <label className="text-lg font-medium">{`${
                  accountType === "seeker" ? "Username" : "Company Name"
                }`}</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Enter your Company Name"
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="flex gap-1">
                <div className="flex flex-col mt-3">
                  <label className="text-lg font-medium">Password</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                    placeholder="Enter your password"
                    type="password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label className="text-lg font-medium">
                    Confirm Password
                  </label>
                  <input
                    required
                    className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                    placeholder="Confirm your password"
                    type={"password"}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <p className="text-red-500 text-sm">{err}</p>
              <div className="mt-6 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-[#1d4fd862] text-blue-900 rounded-xl font-semibold text-lg"
                >
                  Sign Up
                </button>
              </div>
              <div className="mt-6 flex justify-center items-center">
                <p className="font-medium text-base">Already has an account?</p>
                <Link to={"/signin"} className=" px-3 text-black">
                  Log in
                </Link>
              </div>
              <input
                name="message"
                value={`
                Hello ${username} \n You registered an account on Land your first job portal, before being able to use your account you need to verify that this is your email address by clicking here: http://localhost:5173/signin to visit Example.com Kind Regards. 
            `}
                className="hidden"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
