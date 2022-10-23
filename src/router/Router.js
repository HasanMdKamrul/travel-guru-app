import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import SingleBooking from "../Pages/SingleBooking/SingleBooking";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: ErrorPage } = require("../Pages/ErrorPage/ErrorPage");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/bookingdetails",
        element: <BookingDetails />,
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <SingleBooking />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-guru-server-one.vercel.app/destinations/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
