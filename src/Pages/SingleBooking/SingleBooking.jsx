import { addDays } from "date-fns";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { MdOutlineHotel, MdPlace } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const SingleBooking = () => {
  const detail = useLoaderData();
  const { details, place } = detail;

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center mx-12">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-slate-900 uppercase rounded-full bg-teal-accent-400">
                {place}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Innovative analytics
              <br className="hidden md:block" />
              that you{" "}
              <span className="inline-block text-deep-purple-accent-400">
                will love
              </span>
            </h2>
            <p className="text-base text-slate-900 md:text-lg">{details}</p>
          </div>
          <Link
            to="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div>
          <fieldset className="w-full space-y-1 text-slate-900">
            <div className="flex">
              <div className="mr-5">
                <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md">
                  <MdPlace className="text-blue-600" />
                  Origin
                </span>
                <input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Dhaka"
                  className="flex flex-1 px-5 py-2 mb-2 border sm:text-sm rounded-r-md focus:ring-inset  text-gray-100 focus:ring-violet-400"
                />
              </div>
              <div>
                <span className="flex items-center px-3 pointer-events-none sm:text-sm text-slate-900 rounded-l-md">
                  <MdPlace className="text-blue-600" />
                  Destination
                </span>
                <input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Dhaka"
                  className="flex flex-1 px-5 py-2 mb-2 border sm:text-sm rounded-r-md focus:ring-inset  text-gray-100 focus:ring-violet-400"
                />
              </div>
            </div>
          </fieldset>
          <DateRangePicker
            onChange={(item) => {
              console.log(item);
              setState([item.selection]);
            }}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
          />
        </div>
      </div>
      <Link to="/startbooking">
        <button
          type="button"
          className="px-8 mx-12 py-3 font-semibold border-0 bg-sky-400 flex justify-center items-center  rounded border-gray-100 text-slate-900"
        >
          Start Booking
          <MdOutlineHotel className="ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default SingleBooking;
