import React from "react";

function RelatedDealsSection() {
 
  const relatedDeals = [
    {
      id: 1,
      name:"Webbuilder 1",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      views: 250,
    },
    {
      id: 2,
      name:"Webbuilder 1",
      imageUrl: "https://via.placeholder.com/150",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$129.99",
      views: 180,
    },
    {
        id: 3,
        name:"Webbuilder 1",
        imageUrl: "https://via.placeholder.com/150",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$129.99",
        views: 180,
      },
    
  ];

  return (
    <div className=" py-8 w-4/5 p-4 mx-auto">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">Related deals you might like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {relatedDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={deal.imageUrl} alt="Deal" className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="space-x-2 text-blue-300 ">
                  <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">20% off</span>
                  <span className="px-2 m-3 py-1 bg-gray-100 rounded-lg">Limited Time</span>
                </div>
                <h1 className="text-center text-xl text-bold text-gray-500">{deal.name}</h1>
                <h3 className="text-lg font-semibold mb-2">{deal.description}</h3>
                <p className="text-gray-600 mb-2">{deal.price}</p>
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  View Deals
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedDealsSection;
