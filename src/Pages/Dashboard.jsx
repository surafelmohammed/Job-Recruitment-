import React, { useContext, useEffect, useState } from "react";
import DashboardStats from "../Components/DashboardStats";
import TransactionChart from "../Components/TransactionChart";
import RecentJobStatus from "../Components/RecentJobStatus";
import { UserContext } from "../App";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { value1, value2, value3 } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    if (value1.email !== "") {
      fetch(`http://localhost:3000/job/query?keyword=${value1.email}`)
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        });
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col gap-10 bg-[#f1f4f8]">
      <div className="flex flex-row w-full">
        <DashboardStats jobs={jobs} />
      </div>
      <div className="flex lg:flex-row flex-col gap-4 w-full m-5">
        <TransactionChart jobs={jobs} />
        <RecentJobStatus jobs={jobs} />
      </div>
    </div>
  );
};

export default Dashboard;
