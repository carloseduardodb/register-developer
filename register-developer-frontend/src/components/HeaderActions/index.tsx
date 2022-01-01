import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const HeaderActions = () => {
  return (
    <>
      <div className="flex justify-between px-1 py-5">
        <button className="bg-p-blue transform hover:scale-105 transition-transform delay-100 duration-200 ease-in rounded-full p-2">
          <FiArrowLeft size={25} color="white" />
        </button>
        <button className="bg-p-blue transform hover:scale-105 transition-transform delay-100 duration-200 ease-in rounded-md px-5 text-white">
          Create
        </button>
      </div>
    </>
  );
};

export default HeaderActions;
