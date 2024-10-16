import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaUser,
  FaMobileAlt,
  FaIdCard,
  FaVenusMars,
  FaMapMarkerAlt,
  FaTint,
  FaLock,
} from "react-icons/fa";
import { MdEmail, MdSchool, MdEvent } from "react-icons/md";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { departments } from "../constants/departments";
import { districts } from "../constants/district";
import { sessions } from "../constants/session";
import Select from "react-select";

const InputField = ({ label, name, type, icon: Icon, ...props }) => (
  <div className={name === "full_name" ? "md:col-span-2" : ""}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-500" aria-hidden="true" />
      </div>
      <input
        id={name}
        name={name}
        type={type}
        className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
        {...props}
      />
    </div>
  </div>
);

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    department: "",
    student_id: "",
    gender: "",
    district: "",
    blood_group: "",
    academic_year: "",
    // password: "",
    // confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // to handle the changes of input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const department_options = departments.map((dept) => ({
    label: dept.name,
    value: dept.code,
  }));

  const session_options = sessions.map((session) => ({
    label: session,
    value: session,
  }));

  const district_options = districts.map((dist) => ({
    label: dist
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    value: dist,
  }));

  const gender_options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const blood_options = [
    { value: "a+", label: "A+" },
    { value: "a-", label: "A-" },
    { value: "b+", label: "B+" },
    { value: "b-", label: "B-" },
    { value: "ab+", label: "AB+" },
    { value: "ab-", label: "AB-" },
    { value: "o+", label: "O+" },
    { value: "o-", label: "O-" },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{11}$/.test(formData.mobile)) {
      toast.error("Mobile number must be 11 digits");
      return;
    }

    if (!/^\d+$/.test(formData.student_id)) {
      toast.error("Student ID must contain only numeric values");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("pass not match");
      return; // Exit the function early
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/create_user_open",
        { ...formData, password },
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      console.log(response.data);
    } catch (err) {
      setIsLoading(false);
      // setError(err.response.data)
      // console.log(error)
      console.log(err);
      console.log(err.response);
      console.log(err.response.data);
      toast.error(err.response.data.detail);
      console.log(err.response.data.detail);
    }

    // console.log("Signup data:", formData);
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl lg:text-3xl font-extrabold text-gray-900">
          Registered As <span className="text-red-600"> "HERO" </span>
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl  ">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Full name */}
              <InputField
                label="Full Name"
                name="full_name"
                type="text"
                icon={FaUser}
                required
                autoComplete=""
                value={formData.full_name}
                onChange={handleChange}
              />

              {/* Email */}
              <InputField
                label="Email address"
                name="email"
                type="email"
                icon={MdEmail}
                required
                value={formData.email}
                onChange={handleChange}
              />

              {/* mobile */}
              <InputField
                label="Mobile"
                name="mobile"
                type="tel"
                icon={FaMobileAlt}
                required
                value={formData.mobile}
                onChange={handleChange}
                onBlur={(e) => {
                  if (!/^\d{11}$/.test(e.target.value)) {
                    toast.error("Mobile number must be 11 digits");
                  }
                }}
              />

              {/* department */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <div className="relative mt-1">
                  <MdSchool
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
                    size={20}
                  />
                  <Select
                    options={department_options}
                    value={department_options.find(
                      (option) => option.value === formData.department
                    )}
                    onChange={(selectedOption) =>
                      setFormData({
                        ...formData,
                        department: selectedOption ? selectedOption.value : "",
                      })
                    }
                    classNamePrefix="react-select"
                    isSearchable
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        paddingLeft: "2rem",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 20,
                      }),
                    }}
                    required
                    isClearable
                    className="w-full shadow-sm"
                    placeholder="Select Department..."
                  />
                </div>
              </div>

              {/* Student Id */}
              <InputField
                label="Student Id"
                name="student_id"
                type="numeric"
                icon={FaIdCard}
                required
                value={formData.student_id}
                onChange={handleChange}
              />

              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <div className="mt-1 relative">
                  <FaVenusMars
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 pointer-events-none"
                    size={20}
                  />
                  <Select
                    options={gender_options}
                    value={gender_options.find(
                      (option) => option.value === formData.gender
                    )}
                    onChange={(selectedOption) =>
                      setFormData({
                        ...formData,
                        // gender: selectedOption.value,
                        gender: selectedOption ? selectedOption.value : "",
                      })
                    }
                    classNamePrefix="react-select"
                    isSearchable
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        paddingLeft: "2rem",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 20,
                      }),
                    }}
                    className="w-full shadow-sm"
                    isClearable
                    required
                    placeholder="Select Gender..."
                  />
                </div>
              </div>

              {/* District */}
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  District
                </label>
                <div className="mt-1 relative">
                  <FaMapMarkerAlt
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 pointer-events-none"
                    size={20}
                  />
                  <Select
                    id="district"
                    name="district"
                    options={district_options}
                    value={district_options.find(
                      (option) => option.value === formData.district
                    )}
                    onChange={(selectedOption) =>
                      setFormData({
                        ...formData,
                        district: selectedOption ? selectedOption.value : "",
                      })
                    }
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        paddingLeft: "2rem",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 20,
                      }),
                    }}
                    className="w-full shadow-sm"
                    classNamePrefix="react-select"
                    isClearable
                    isSearchable
                    required
                    placeholder="Select District..."
                  />
                </div>
              </div>

              {/* Blood Group */}
              <div>
                <label
                  htmlFor="blood_group"
                  className="block text-sm font-medium text-gray-700"
                >
                  Blood Group
                </label>
                <div className="mt-1 relative ">
                  <FaTint
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 pointer-events-none"
                    size={18}
                  />

                  <Select
                    id="blood_group"
                    name="blood_group"
                    options={blood_options}
                    value={blood_options.find(
                      (option) => option.value === formData.blood_group
                    )}
                    onChange={(selectedOption) =>
                      setFormData({
                        ...formData,
                        blood_group: selectedOption ? selectedOption.value : "",
                      })
                    }
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        paddingLeft: "2rem",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 20,
                      }),
                    }}
                    className="w-full shadow-sm"
                    classNamePrefix="react-select"
                    isSearchable
                    isClearable
                    required
                    placeholder="Select Blood Group..."
                  />
                </div>
              </div>

              {/* session */}
              <div>
                <label
                  htmlFor="academic_year"
                  className="block text-sm font-medium text-gray-700"
                >
                  Session
                </label>
                <div className="relative mt-1">
                  <MdEvent
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 pointer-events-none"
                    size={18}
                  />
                  <Select
                    id="academic_year"
                    name="academic_year"
                    options={session_options}
                    value={session_options.find(
                      (option) => option.value === formData.academic_year
                    )}
                    onChange={(selectedOption) =>
                      setFormData({
                        ...formData,
                        academic_year: selectedOption
                          ? selectedOption.value
                          : "",
                      })
                    }
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        paddingLeft: "2rem",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 20,
                      }),
                    }}
                    className="w-full shadow-sm"
                    classNamePrefix="react-select"
                    isClearable
                    isSearchable
                    required
                    placeholder="Select Session..."
                  />
                </div>
              </div>

              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium underline text-blue-600 hover:text-red-500"
                >
                  Already Have an Account?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 
  transform transition-transform duration-150 ease-in-out active:scale-95 "
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
