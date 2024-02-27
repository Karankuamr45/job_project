import React from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

function Section() {
  return (
    <div className="w-full">
      <div className=" md:ml-24 text-4xl lg:text-5xl xl:ml-64 mt-8">
        Best Websites buiders in the US
      </div>

      <div className=" md:ml-24 xl:ml-64 mt-8 border-t border-gray-400 border-b p-4 w-4/4 sm:w-3/4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2">
            <FaCheckCircle size={20} />
          </span>
          <span>Last Updated - February 22, 2020</span>
          <span className="mr-2 ml-8">
            <FaInfoCircle size={20} />
          </span>
          <span className="mx-1">Advertising Disclosure</span>
        </div>

        <div className="flex items-center mx-4">
          <span>Top Relevent</span>
          <span className="mr-2 ml-2">
            <BsChevronDown size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section;
