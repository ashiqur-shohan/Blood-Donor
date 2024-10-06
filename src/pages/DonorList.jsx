import { useState } from "react";
import {
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const DonorList = () => {
  const [filters, setFilters] = useState({
    bloodType: "",
    location: "",
    availability: "",
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

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const availabilityOptions = [
    "Available Now",
    "Available This Week",
    "Available This Month",
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would apply the filters to fetch donors from an API
    console.log("Filters applied:", filters);
  };

  const handleFilterReset = () => {
    setFilters({
      bloodType: "",
      location: "",
      availability: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          Blood Donor Listings
        </h1>

        {/* Filter Section */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Filter Donors
          </h2>
          <form onSubmit={handleFilterSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="bloodType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Blood Type
                </label>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={filters.bloodType}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                >
                  <option value="">Any</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  placeholder="Enter city or zip code"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-gray-700"
                >
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={filters.availability}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                >
                  <option value="">Any</option>
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleFilterReset}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <XMarkIcon className="h-5 w-5 mr-2 text-gray-400" />
                Reset
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Apply Filters
              </button>
            </div>
          </form>
        </div>

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
