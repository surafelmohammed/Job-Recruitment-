import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Emailpopup from "../Components/Emailpopup";

const Applicants = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowpopup] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const itemsPerPage = 5;

  const { id } = useParams();
  const data = useLoaderData();

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  //nxt btn and previous btn
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleClose = () => {
    setShowpopup(false);
  };

  return (
    // <div>
    //     {data.applicants.map((item)=> <div>{item.username} {item.email}</div>)}
    // </div>
    <div className="flex justify-center overflow-x-auto m-5 mt-10 ">
      <table className="items-center bg-transparent border-collapse ">
        <thead>
          <tr>
            <th className=" bg-blueGray-50 px-6 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              No
            </th>
            <th className=" bg-blueGray-50 px-6 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Applicant Name
            </th>
            <th className=" bg-blueGray-50 px-6 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Applicant Email
            </th>

            <th className=" bg-blueGray-50 px-6 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Aplicant Cv
            </th>

            <th className=" bg-blueGray-50 px-6 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Status
            </th>
            <th>
              <Link to={`/my-job`}>
                <button className="bg-white border py-2 px-2 rounded-sm text-primary font-bold">
                  Back
                </button>
              </Link>
            </th>
          </tr>
        </thead>
        {
          <tbody>
            {data.applicants.map((item, index) => (
              <tr>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 ">
                  {index + 1}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 ">
                  {item.username}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                  {item.email}
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                  <a href={item.cv} target="_blank" rel="noopener noreferrer">
                    {item.cv}
                  </a>
                </td>

                <td className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                  <Link to={`/applicants/${data?._id}`}>
                    <button
                      onClick={() => {
                        setEmail(item.email);
                        setUsername(item.username);
                        setShowpopup(true);
                      }}
                      className="bg-green-400 border py-2 px-2 rounded-sm text-primary font-bold"
                    >
                      {item.status[0]}
                    </button>
                  </Link>
                  <Link to={`/applicants/${data?._id}`}>
                    <button className="bg-white border py-2 px-2 rounded-sm text-primary font-bold">
                      {item.status[1]}
                    </button>
                  </Link>

                  <button
                    onClick={() => {
                      setEmail(item.email);
                      setUsername(item.username);
                      setShowpopup(true);
                    }}
                    className="bg-red-400 border py-2 px-2 rounded-sm text-primary font-bold"
                  >
                    {item.status[2]}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        }
      </table>
      <Emailpopup
        visible={showPopup}
        close={handleClose}
        email={email}
        username={username}
      />
    </div>
  );
};

export default Applicants;
