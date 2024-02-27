import React from "react";
import { FaTrophy, FaStar } from "react-icons/fa";

function ProductSection() {
  const products = [
    {
      serialNo: "01",
      name: "Sample Product 1",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam at urnapat est. Fusce semper, nulla eget sodales fringilla, lacus metus scelerisque justo, id elementum sem tortor in metus.",
      rating: 4.8,
      tags: ["Best Choice"],
    },
    {
      serialNo: "01",
      name: "Sample Product 1",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam at urnapat est. Fusce semper, nulla eget sodales fringilla, lacus metus scelerisque justo, id elementum sem tortor in metus.",
      rating: 4.8,
      tags: ["Best Choice"],
    },
    {
      serialNo: "01",
      name: "Sample Product 1",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam at urnapat est. Fusce semper, nulla eget sodales fringilla, lacus metus scelerisque justo, id elementum sem tortor in metus.",
      rating: 4.8,
      tags: ["Best Choice"],
    },
    {
      serialNo: "01",
      name: "Sample Product 1",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam at urnapat est. Fusce semper, nulla eget sodales fringilla, lacus metus scelerisque justo, id elementum sem tortor in metus.",
      rating: 4.8,
      tags: ["Best Choice"],
    },
    
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full   m-8 xl:ml-[235px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-center gap-10 mb-8"
          >
            {/* Left Side: Image */}
            <div className="w-full md:w-1/3 relative md:max-w-60 ">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto"
              />
              <ul className="absolute top-0 left-0 m-2">
                {product.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-orange-500 text-white text-xs px-2 py-1 mr-2 mb-2 rounded"
                  >
                    <FaTrophy className="mr-1" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle: Description */}
            <div className="w-full md:w-1/3 p-4 md:px-8">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>

            {/* Right Side: Rating */}
            <div className="w-full md:w-1/3 p-4 items-center  md:flex-row ">
              <div className="bg-gray-100 w-40 p-4 md:ml-20  items-center rounded-lg text-blue-500 text-center md:mr-4">
                <p>{product.rating}</p>
                <p className="mb-2">Exceptional</p>

                <div className="flex items-center justify-center">
                  {Array.from(
                    { length: Math.floor(product.rating) },
                    (_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    )
                  )}
                  {product.rating % 1 !== 0 && (
                    <FaStar className="text-yellow-500" />
                  )}
                </div>
              </div>

              <div className="mt-4  text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-64">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
