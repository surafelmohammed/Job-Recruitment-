import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Sidebar/Sidebar";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/job")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // handle input changes
  const [qurey, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter json by title
  const filteredItem = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(qurey.toLowerCase()) !== -1
  );

  // radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };
  //function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItem.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  //function for the pervious page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // main function
  const filteredData = (jobs, selected, qurey) => {
    let filteredJobs = jobs;

    //filter input items
    if (qurey) {
      filteredJobs = filteredItem;
    }
    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ experienceLevel, employmentType }) =>
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };
  const result = filteredData(jobs, selectedCategory, qurey);

  const footerLinks = [
    {
      id: "01",
      title: "COMPANY",
      links: ["Home", "About Us", "Services", "Our Team"],
    },
    {
      id: "02",
      title: "POLICY",
      links: ["Policies", "Contact", "FAQ"],
    },
    {
      id: "03",
      title: "SUPPORT",
      links: ["Account", "Support Center", "Feedback", "Accessibility"],
    },
  ];

  return (
    <div>
      <Banner qurey={qurey} handleInputChange={handleInputChange} />
      <div className="bg-white md:grid grid-cols-4 gap-8 lg:px-12 px-4 py-12">
        {/* left side */}
        <div className="bg-[#f7fdfd] p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* right side */}
        <div className="bg-[#f7fdfd] col-span-3 p-4 rounded-sm">
          {isLoading ? (
            <p>Loadding...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}
          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-2 space-x-8">
              <button onClick={previousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItem.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage == Math.ceil(filteredItem.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <footer className="text-white mp-20">
        {/* creating the wave */}
        <div className="overflow-x-hidden -mb-0.5">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            style={{
              fill: "#f1f4f8",
              width: "125%",
              height: 112,
              transform: "rotate(180deg)",
            }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>

        <div className="bg-[#f1f4f8] ">
          <div className="container px-5 py-20 mx-auto ">
            <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4">
              {footerLinks.map(({ id, title, links }) => (
                <div className="w-auto px-4 " key={id + title}>
                  <h2 className="font-extrabold text-black tracking-widest text-sm mb-3">
                    {title}
                  </h2>

                  <div className="mb-10 flex flex-col gap-3 ">
                    {links.map((link, index) => (
                      <Link
                        key={link + index}
                        to="/contact-us"
                        className="text-black text-sm hover:text-blue "
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between ">
              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                <a className="text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaFacebookF className="text-black" />
                </a>
                <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaTwitter className="text-black" />
                </a>
                <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FiInstagram className="text-black" />
                </a>

                <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaLinkedinIn className="text-black" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
