import * as React from "react";
import Logo from "../../public/logo.svg";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import JobImg from "../assets/job.jpg";

const SignIn = () => {
  const { value1, value2, value3 } = useContext(UserContext);
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 201) {
        const content = res.json();
        value3.setEmail(content.email);
        setRedirect(true);
      } else if (res.status !== 201) {
        setErr("Incorrect Email and password");
      }
    });
    //this is for the refresh
    // const content = response.json();
    // value3.setEmail(content.email)
  };
  if (redirect) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="flex w-full h-screen bg-[#f1f4f8]">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className=" w-11/12 max-w-[700px] p-10 mr-20 ml-20 mb-20 rounded-3xl bg-white border-2 border-gray-100">
          <h1 className="text-4xl font-semibold">Welcome Back </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter you details.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div className="w-full flex items-center justify-center "></div>
              <div className="flex flex-col">
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  value={email}
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <p className="text-red-500">{err}</p>
              <div className="flex flex-col mt-4">
                <label className="text-lg font-medium">Password</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <p className="text-red-500">{err}</p>
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <input type="checkbox" id="remember" />
                  <label className="ml-2 font-medium text-base" for="remember">
                    Remember for 30 days
                  </label>
                </div>
                <button className="hidden font-medium text-base text-black-900">
                  Forgot password
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-[#1d4fd862] text-blue-900 rounded-xl font-semibold text-lg"
                >
                  Sign in
                </button>
              </div>
              <div className="mt-6 flex justify-center items-center">
                <p className="font-medium text-base">Don't have an account?</p>
                <Link to={"/signup"} className=" px-3  rounded text-black">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
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
    </div>
  );
};

export default SignIn;
