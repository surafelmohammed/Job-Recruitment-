import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import JobDetails from "../Pages/JobDetails";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import Applicants from "../Pages/Applicants";
import Emailpopup from "../Components/Emailpopup";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> },
      { path: "/contact-us", element: <ContactUs /> },
      {
        path: "/popup/:id",
        element: <Emailpopup />,
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },
      {
        path: "/applicants/:id",
        element: <Applicants />,
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },

      { path: "*", element: <p>There is no page dedicated to this</p> },
    ],
  },
]);
export default router;
