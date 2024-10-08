import React, { useState } from "react";
import {
  Search,
  Filter,
  Users,
  Droplet,
  GraduationCap,
  MapPin,
  UserCheck,
} from "lucide-react";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const departments = [
  "Statistics",
  "Math",
  "Physics",
  "Computer Science",
  "Chemistry",
  "Biology",
];
const districts = [
  "Comilla",
  "Dhaka",
  "Rajshahi",
  "Chittagong",
  "Sylhet",
  "Khulna",
];

const FilterSection = ({ filters, setFilters, applyFilters, resetFilters }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Filter className="w-6 h-6 mr-2" /> Filters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block mb-2 font-semibold flex items-center">
            <Search className="w-4 h-4 mr-1" /> Search
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Search donors..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold flex items-center">
            <Droplet className="w-4 h-4 mr-1" /> Blood Type
          </label>
          <select
            className="w-full p-2 border rounded"
            value={filters.bloodType}
            onChange={(e) =>
              setFilters({ ...filters, bloodType: e.target.value })
            }
          >
            <option value="">All</option>
            {bloodTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold flex items-center">
            <GraduationCap className="w-4 h-4 mr-1" /> Department
          </label>
          <select
            className="w-full p-2 border rounded"
            value={filters.department}
            onChange={(e) =>
              setFilters({ ...filters, department: e.target.value })
            }
          >
            <option value="">All</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold flex items-center">
            <Users className="w-4 h-4 mr-1" /> Gender
          </label>
          <select
            className="w-full p-2 border rounded"
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold flex items-center">
            <MapPin className="w-4 h-4 mr-1" /> District
          </label>
          <select
            className="w-full p-2 border rounded"
            value={filters.district}
            onChange={(e) =>
              setFilters({ ...filters, district: e.target.value })
            }
          >
            <option value="">All</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold flex items-center">
            <UserCheck className="w-4 h-4 mr-1" /> Student Status
          </label>
          <select
            className="w-full p-2 border rounded"
            value={filters.studentStatus}
            onChange={(e) =>
              setFilters({ ...filters, studentStatus: e.target.value })
            }
          >
            <option value="">All</option>
            <option value="current">Current</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition duration-300"
          onClick={resetFilters}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

const DonorList = ({ donors }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Users className="w-6 h-6 mr-2" /> Donor List
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Blood Type</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">District</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="px-4 py-2">{donor.name}</td>
                <td className="px-4 py-2">{donor.bloodType}</td>
                <td className="px-4 py-2">{donor.department}</td>
                <td className="px-4 py-2">{donor.gender}</td>
                <td className="px-4 py-2">{donor.district}</td>
                <td className="px-4 py-2">{donor.studentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DonorListPage = () => {
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
      name: "John Doe",
      bloodType: "A+",
      department: "Computer Science",
      gender: "Male",
      district: "Dhaka",
      studentStatus: "Current",
    },
    {
      name: "Jane Smith",
      bloodType: "B-",
      department: "Physics",
      gender: "Female",
      district: "Comilla",
      studentStatus: "Alumni",
    },
    // Add more donor data as needed
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
    <div className="container mx-auto px-4 py-8">
      <FilterSection
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
      />
      <DonorList donors={donors} />
    </div>
  );
};

export default DonorListPage;
