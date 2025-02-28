import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import MeetOurTeam from "./Components/MeetOurTeam";
import Blog from "./Components/Blog";
import GetInTouch from "./Components/GetInTouch";
import AboutMe from "./Components/AboutMe";
import SignUp from "./Components/SignUp";
import Layout from "./Components/Layout";
import LogIn from "./Components/LogIn";
import Settings from "./Components/Settings";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/meet-our-team",
          element: <MeetOurTeam />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/get-in-touch",
          element: <GetInTouch />,
        },
        {
          path: "/about_me",
          element: <AboutMe />,
        },
      ],
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/log-in",
      element: <LogIn />,
    },

    {
      path: "/settings",
      element: <Settings />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
