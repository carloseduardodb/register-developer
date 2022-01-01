import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Pagination = () => {
  return (
    <>
      <ul className="flex p-2 gap-x-3 text-white text-sm">
        <li>
          <a
            href="#"
            className="bg-p-blue rounded-full flex items-center justify-center w-7 h-7"
          >
            <FiChevronLeft />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-p-blue rounded-full flex items-center justify-center w-7 h-7"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-p-blue rounded-full flex items-center justify-center w-7 h-7"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-p-blue rounded-full flex items-center justify-center w-7 h-7"
          >
            ...
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-p-blue rounded-full flex items-center justify-center w-7 h-7"
          >
            7
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-p-blue rounded-full flex items-center justify-center w-7 h-7"
          >
            8
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-p-blue rounded-full flex items-center justify-center w-7 h-7"
          >
            <FiChevronRight />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
