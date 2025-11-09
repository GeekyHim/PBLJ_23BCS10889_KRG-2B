import React from "react";
//import Navbar from "./Navbar";


const PropertyPage = () => {
  const property = {
  id: 1,
  title: "2BHK Apartment",
  location: "Chandigarh",
  price: "₹40,000",
  type: "rent",
  imageUrl: "https://via.placeholder.com/600x400",
  description: "A beautiful 2BHK apartment with modern amenities, located near parks and markets.",
  bedrooms: 2,
  bathrooms: 2,
  area: "950 sqft",
  furnished: "Semi-furnished",
};

  
    return (
    <div>
     {/* // <Navbar /> */}

      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Property Image */}
          <div className="md:w-1/2">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="rounded-xl w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Property Details */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-blue-600">{property.title}</h1>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-green-600 font-bold text-xl">{property.price}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {property.type.toUpperCase()}
            </span>

            <p className="mt-4 text-gray-700">{property.description}</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="font-semibold">{property.bedrooms}</p>
                <p className="text-gray-500 text-sm">Bedrooms</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="font-semibold">{property.bathrooms}</p>
                <p className="text-gray-500 text-sm">Bathrooms</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="font-semibold">{property.area}</p>
                <p className="text-gray-500 text-sm">Area</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-center">
                <p className="font-semibold">{property.furnished}</p>
                <p className="text-gray-500 text-sm">Furnishing</p>
              </div>
            </div>

            {/* Contact / Action Button */}
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
