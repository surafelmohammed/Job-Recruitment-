import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import { UserContext } from "../App";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { value1, value2, value3, value4 } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3000/job/create", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        console.log(`${res.status}-------------the status`);
        if (res.status == 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .then((result) => {
        reset();
      });
  };
  //   const options =[
  //     {value:'javascript', label:"javascript"},
  //     {value:'C++', label:"C++"},
  //     {value:'HTML', label:"HTML"},
  //     {value:'CSS', label:"CSS"},
  //     {value:'React', label:"React"},
  //     {value:'Node', label:"Node"},
  //     {value:'Front end', label:"Front end"},
  //     {value:'Back end', label:"Back end"},
  //     {value:'Full Stack', label:"Full Stack"},
  //   ]

  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-24 px-4 py-8">
      {/* react form hook */}
      <div className="bg-[#f1f4f8] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                required
                type="text"
                placeholder="Ex: Web Developer"
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                required
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          {/* <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Minimum Salary</label>
                    <input type="text" placeholder='$20k' {...register("minPrice")} className='create-job-input'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Maximum Salary</label>
                    <input type="text" placeholder='$100k' {...register("maxPrice")} className='create-job-input'/>
                </div>
            </div> */}

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                required
                type="text"
                placeholder="Ex:Addis Ababa"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                required
                type="date"
                placeholder="Ex:2024-03-28"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Choose Your Experience Level</option>
                <option value="Any experience">No experience</option>
                <option value="Intership">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          {/* <div>
                <label className='block mb-2 text-lg'>Required Skill Sets:</label>
                <CreatableSelect 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                isClearable 
                isMulti
                options={options}
                className='create-job-input py-4'/>
            </div> */}

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                required
                type="url"
                placeholder="Past Your company logo url:  https://logo.com/img"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Choose Your Employment Type</option>
                <option value="Temporary">Temporarye</option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              required
              className="w-full pl-2 py-1.5 focus:outline-none placeholder:text-gray-400"
              rows={6}
              placeholder={"the is the job description for the job post"}
              {...register("description")}
            />
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Post Job by</label>
            <input
              defaultValue={value1.email}
              required
              type="email"
              placeholder="Your email: "
              {...register("postedby")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
