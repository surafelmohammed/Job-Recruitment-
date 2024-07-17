import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;
  return (
    <section className="w-[280px] h-[300px]">
      <Link
        to={`/job/${_id}`}
        className="w-full md:w-[16rem] 2xl:w-[18rem] h-[18rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg rounded-md px-3 py-5 "
      >
        <div className="flex flex-col gap-2 group-hover:text-white">
          <div className="flex justify-start items-start gap-2">
            <img src={companyLogo} alt="" className="w-14 h-14 rounded-xl" />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{jobTitle?.slice(0, 16)}</h3>
              <span className="flex items-center gap-2 text-black">
                <FiMapPin />
                {jobLocation}
              </span>
            </div>
          </div>
          <p className=" text-black text-sm pt-5 group-hover:text-white">
            {description?.slice(0, 150) + "..."}
          </p>

          <div className="flex justify-between ">
            <h4 className="text-primary mb-1 group-hover:text-white">
              {companyName}
            </h4>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm">
              <FiClock />
              {employmentType?.slice(0, 10)}
            </span>
            <span className="flex justify-end items-center gap-2 text-gray-500 text-sm">
              <FiCalendar />
              {postingDate}
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
