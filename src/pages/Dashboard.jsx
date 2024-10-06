import React, { useState } from "react";
import {
  UserCircleIcon,
  MapPinIcon,
  CalendarIcon,
  PhoneIcon,
  PencilIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    bloodType: "A+",
    availabilityStatus: "Available",
    location: "New York, NY",
    lastDonation: "2023-05-15",
    phoneNumber: "+1 (555) 123-4567",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    console.log("Updated user data:", user);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  User Profile
                </h2>
              </div>
              <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  {isEditing ? (
                    <>
                      <CheckIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                      Edit Profile
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    ) : (
                      user.name
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Blood Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {isEditing ? (
                      <select
                        id="bloodType"
                        name="bloodType"
                        value={user.bloodType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      >
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                          (type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          )
                        )}
                      </select>
                    ) : (
                      user.bloodType
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Availability Status
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {isEditing ? (
                      <select
                        id="availabilityStatus"
                        name="availabilityStatus"
                        value={user.availabilityStatus}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      >
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                        <option value="On Hold">On Hold</option>
                      </select>
                    ) : (
                      user.availabilityStatus
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {isEditing ? (
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={user.location}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    ) : (
                      user.location
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Last Donation
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {isEditing ? (
                      <input
                        type="date"
                        name="lastDonation"
                        id="lastDonation"
                        value={user.lastDonation}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    ) : (
                      user.lastDonation
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone Number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    ) : (
                      user.phoneNumber
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
