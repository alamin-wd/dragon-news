import { createBrowserRouter, } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },

            {
                path: "/about",
                element: <About></About>,
            },

            {
                path: "/career",
                element: <Career></Career>,
            }
        ]
    }
]);

export default router;
// //  {
//     path: "/job/:id",
//     element: <JobDetails></JobDetails>,
//     loader: () => fetch('../jobs.json'),
//   },
