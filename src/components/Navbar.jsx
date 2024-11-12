import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-20 py-4 bg-pastelblue">
        {/* TITLE */}
        <div className="text-darkgreen text-3xl poppins-bold hover:text-pastelgreen transition duration-300">
          Ripple & Refresh
        </div>
        {/* PAGES */}
        <div className="flex flex-row gap-8 poppins-semibold text-2xl text-darkblue">
          <p className="hover:text-pastelgreen transition duration-300">map</p>
          <p className="hover:text-pastelgreen transition duration-300">rsvp</p>
          <p className="hover:text-pastelgreen transition duration-300">
            activity
          </p>
        </div>
      </div>
      {/* Horizontal line separator */}
      <hr className="w-full border-t-2 border-pastelgreen border-opacity-50" />
    </>
  );
}

export default Navbar;
