import React from "react";

function SignUpSection() {
  return (
    <div className="py-8">
      <div className="sm:w-5/6 mx-auto flex flex-col items-center justify-between lg:flex-row">
        
        <div className="mb-6 lg:mb-0 lg:mr-6">
          <h2 className=" text-2xl sm:text-3xl font-semibold mb-4">Sign Up and Get Exclusive Special Deals</h2>
         
        </div>

       
        <div className="w-full  flex justify-center lg:justify-end items-center">
          <div className="mr-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="border w-80 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500  pr-10"
            />
            <button className="absolute inset-y-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
