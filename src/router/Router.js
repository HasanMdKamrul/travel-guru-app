import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import SingleBooking from "../Pages/SingleBooking/SingleBooking";

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
        element: <SingleBooking />,
        loader: ({ params }) =>
          fetch(`http://localhost:16000/destinations/${params.id}`),
      },
    ],
  },
]);

export default router;
