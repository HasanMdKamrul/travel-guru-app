import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const DetailsDestinationText = ({ destination }) => {
  const { picture, place, details, id } = destination;

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-transparent rounded shadow-2xl">
      <img src={picture} className="object-cover w-full h-64" alt="" />
      <div className="p-5  ">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-gray-200 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {place}
          </a>
          <span className="text-gray-200">— 28 Dec 2020</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors text-gray-200 duration-200 hover:text-deep-purple-accent-700"
        >
          {place}
        </a>
        <p className="mb-2 text-gray-200">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <Link
          to={`/book/${id}`}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          <button
            type="button"
            className="px-8 py-3 font-semibold border-0 bg-sky-400 flex justify-center items-center  rounded border-gray-100 text-gray-200"
          >
            Book Now
            <HiArrowLongRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsDestinationText;
