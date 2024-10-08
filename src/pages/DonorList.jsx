import { useState } from "react";

import FilterSection from "../components/DonorList/Filter";

const DonorList = () => {
  const [filters, setFilters] = useState({
    search: "",
    bloodType: "",
    department: "",
    gender: "",
    district: "",
    studentStatus: "",
  });

  const [donors, setDonors] = useState([
    {
      id: 1,
      name: "John Doe",
      bloodType: "A+",
      location: "New York",
      availability: "Available Now",
      lastDonation: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      bloodType: "O-",
      location: "Los Angeles",
      availability: "Available This Week",
      lastDonation: "2023-03-20",
    },
    {
      id: 3,
      name: "Mike Johnson",
      bloodType: "B+",
      location: "Chicago",
      availability: "Available This Month",
      lastDonation: "2023-02-10",
    },
    {
      id: 4,
      name: "Emily Brown",
      bloodType: "AB-",
      location: "Houston",
      availability: "Available Now",
      lastDonation: "2023-04-05",
    },
    {
      id: 5,
      name: "David Lee",
      bloodType: "O+",
      location: "Phoenix",
      availability: "Available This Week",
      lastDonation: "2023-05-12",
    },
  ]);

  const applyFilters = () => {
    // Implement filter logic here
    console.log("Applying filters:", filters);
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      bloodType: "",
      department: "",
      gender: "",
      district: "",
      studentStatus: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          Blood Donor Listings
        </h1>

        {/* Filter Section */}

        <FilterSection
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
        />
        {/* Donor Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor) => (
            <div
              key={donor.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {donor.name}
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Blood Type:</span>
                  <span className="text-sm font-medium text-red-600">
                    {donor.bloodType}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Location:</span>
                  <span className="text-sm text-gray-800">
                    {donor.location}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Availability:</span>
                  <span className="text-sm text-green-600">
                    {donor.availability}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Donation:</span>
                  <span className="text-sm text-gray-800">
                    {donor.lastDonation}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3">
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                  Contact Donor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorList;
