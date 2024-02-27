import React from "react";
import { FaChevronRight } from "react-icons/fa";

function Breadcrumb() {
  return (
    <div className="flex items-center space-x-2 ml-5 md:ml-24 xl:ml-64 flex-wrap">
      <span>Home</span>
      <FaChevronRight />
      <span>Hosting for all</span>
      <FaChevronRight />
      <span>Hoisting</span>
      <FaChevronRight />
      <span>Hosting6</span>
      <FaChevronRight />
      <span>Hosting5</span>
    </div>
  );
}

export default Breadcrumb;
