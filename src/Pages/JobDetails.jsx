import React, { useContext, useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import JobImg from "../assets/job.jpg";
import { UserContext } from "../App";

const JobDetails = () => {
  const { value1, value2, value3, value4 } = useContext(UserContext);

  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState("");
  const status = { 0: "Accepted", 1: "Under review", 2: "Rejected" };

  const data = useLoaderData();

  const apply = () => {
    setRedirect(!redirect);
  };

  const submit = async (e) => {
    e.preventDefault();
    data.applicants.push({ username, email, cv, status });
    console.log("------------------applicants----------------");
    console.log(data);

    await fetch(`http://localhost:3000/job/update/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json();
      console.log(res.status);
      if (res.status === 200) {
        return Swal.fire({
          position: "center",
          icon: "success",
          title: "Applied successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="/">Why do I have this issue?</a>',
        });
      }
    });
    setRedirect(false);
  };

  return (
    <div className="bg-[#f7fdfd] max-w-screen-2xl container mx-auto xl:px-24 px-4 py-10">
      <div className="flex">
        <div className="w-1/2">
          <h2>Company {data.companyName}</h2>
          <strong></strong>
          <div className="text-blue font-serif text-2xl mt-8 mb-2">
            Job Details
          </div>
          <p className=" mb-4 font-light text-lg">{data.description}</p>
          <p className="mb-2 font-light ">
            <strong className="font-bold">Salary Type: </strong>
            {data.salaryType}
          </p>
          <p className="mb-2 font-light ">
            <strong className="font-bold">Job Location: </strong>
            {data.jobLocation}
          </p>
          <p className="mb-2 font-light ">
            <strong className="font-bold">Employment Type: </strong>
            {data.employmentType}
          </p>
          <p className="mb-2 font-light ">
            <strong className="font-bold">Job Posted Date: </strong>
            {data.postingDate}
          </p>
          <p className="mb-8 font-light ">
            <strong className="font-bold">Exprience Level: </strong>
            {data.experienceLevel}
          </p>

          <div className="flex gap-2">
            <button
              className="bg-blue px-10 py-2 text-white rounded-sm"
              onClick={apply}
            >
              Apply Now
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={JobImg}
            alt="About"
            className="block w-full h-[300px] rounded-xl"
          />
          <div className="hidden lg:flex flex-col  w-full items-center justify-center bg-[#f1f4f8]">
            <p className="font-medium text-lg text-gray-500 mt-4 p-4">
              Inorder to apply click the Apply now button and Please insert your
              information.
            </p>
            <p className="font-light text-sm text-gray-500 m-4">
              surafelmohammed66@gmail.com.
            </p>
          </div>
          <div className="max-w-screen-2xl mx-auto container px-4 py-4">
            {/* react form hook */}
            <div
              className={
                redirect
                  ? "block border py-10 px-4 lg:px-16 bg-[#FAFAFA]"
                  : "hidden"
              }
            >
              <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white p-12 rounded-lg w-[30rem] ">
                  <form onSubmit={submit} className="space-y-5 ">
                    <div className="w-full ">
                      <label className="block mb-2 text-lg">
                        Applicant Username
                      </label>
                      <input
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        required
                        placeholder="Username"
                        className="create-job-input border"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block mb-2 text-lg">
                        Applicant Email Address
                      </label>
                      <input
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                        placeholder="Ex: surafel@gmail.com"
                        className="create-job-input border"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block mb-2 text-lg">
                        Applicants Cv
                      </label>
                      <input
                        type="url"
                        onChange={(e) => {
                          setCv(e.target.value);
                        }}
                        required
                        placeholder="applicant cv: "
                        className="create-job-input border"
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <input
                        type="submit"
                        className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
                      />
                      <button
                        onClick={apply}
                        className=" px-8 py-2 mt-12  bg-blue text-white rounded-sm "
                      >
                        Cancle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
