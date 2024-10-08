import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { departments } from "../../constants/departments";
import { districts } from "../../constants/district";
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


const FilterSection = ({
  filters = {},
  setFilters,
  applyFilters,
  resetFilters,
}) => {
  const {
    search = "",
    bloodType = "",
    department = "",
    gender = "",
    district = "",
    studentStatus = "",
  } = filters;

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-red-600">
        <Filter className="w-6 h-6 mr-2" /> Filters
      </h2>
      {/* filter options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* search box */}
        <div>
          <label className="mb-2 font-semibold flex items-center text-red-600">
            <Search className="w-4 h-4 mr-1" /> Search
          </label>
          <input
            type="text"
            className="w-full p-2 border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Search name or Id..."
            value={search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-2 font-semibold flex items-center text-red-600">
            <Droplet className="w-4 h-4 mr-1" /> Blood Type
          </label>
          <select
            className="w-full p-2 border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={bloodType}
            onChange={(e) => handleFilterChange("bloodType", e.target.value)}
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
          <label className="mb-2 font-semibold flex items-center text-red-600">
            <GraduationCap className="w-4 h-4 mr-1" /> Department
          </label>
          <select
            className="w-full p-2 border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={department}
            onChange={(e) => handleFilterChange("department", e.target.value)}
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
          <label className=" mb-2 font-semibold flex items-center text-red-600">
            <Users className="w-4 h-4 mr-1" /> Gender
          </label>
          <select
            className="w-full p-2 border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={gender}
            onChange={(e) => handleFilterChange("gender", e.target.value)}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className=" mb-2 font-semibold flex items-center text-red-600">
            <MapPin className="w-4 h-4 mr-1" /> District
          </label>
          <select
            className="w-full p-2 border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={district}
            onChange={(e) => handleFilterChange("district", e.target.value)}
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
          <label className=" mb-2 font-semibold flex items-center text-red-600">
            <UserCheck className="w-4 h-4 mr-1" /> Student Status
          </label>
          <select
            className="w-full p-2 border border-red-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={studentStatus}
            onChange={(e) =>
              handleFilterChange("studentStatus", e.target.value)
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
          type="button"
          onClick={resetFilters}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 "
        >
          <XMarkIcon className="h-5 w-5 mr-2 text-gray-400" />
          Reset
        </button>
        <button
          type="submit"
          onClick={applyFilters}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 "
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
