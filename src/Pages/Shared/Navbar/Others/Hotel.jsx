import React from "react";
import { MdHotel } from "react-icons/md";
import { Link } from "react-router-dom";

const Hotel = ({ hotel }) => {
  const { picture, bed, price, type, place } = hotel;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-transparent rounded shadow-2xl">
      <img src={picture} className="object-cover w-full h-24" alt="" />
      <div className="p-5  ">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-slate-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {place}
          </a>
          <span className="text-slate-900">— 28 Dec 2020</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors text-slate-900 duration-200 hover:text-deep-purple-accent-700"
        >
          {place}
        </a>
        <p className="mb-2 text-slate-900">
          <small>{type}</small>
          <br />
          <small>{bed}</small>
          <br />
          <small>{price}</small>
        </p>
        <Link
          to={`/`}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          <button
            type="button"
            className="px-8 py-3 font-semibold border-0 bg-sky-400 flex justify-center items-center  rounded border-gray-100 text-slate-900"
          >
            Details
            <MdHotel className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hotel;
