import React from "react";

function MiddleSection() {
  return (
    <div className="flex justify-center py-4 mt-5  ">
      <div className="flex items-center space-x-6 lg:space-x-16 flex-wrap">
        <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">Tools</span>
        <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">
          AWS Builder
        </span>
        <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">
          Start Build
        </span>
        <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">
          Build Supplies
        </span>
        <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">Tooling</span>
        <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">
          Blue Hoisting
        </span>
      </div>
    </div>
  );
}

export default MiddleSection;
