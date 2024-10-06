import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faIdCard,
  faBuilding,
  faEnvelope,
  faMapMarkerAlt,
  faTint,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="w-full max-w-3xl p-6 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg shadow-md">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Join the Blood Donation Community
          </h1>
          <p className="text-lg mt-2">Your blood can save lives</p>
        </header>

        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div className="relative">
              <label className="block mb-2 text-gray-700" htmlFor="name">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-red-700" />{" "}
                <span className="text-black">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-[#cccccc] rounded-md "
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Mobile */}
            <div className="relative">
              <label className="block mb-2 text-black" htmlFor="mobile">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-700" />{" "}
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="w-full p-2 border border-[#cccccc] rounded-md"
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Student ID */}
            <div className="relative">
              <label className="block mb-2 text-black" htmlFor="student_id">
                <FontAwesomeIcon
                  icon={faIdCard}
                  className="mr-2 text-red-700"
                />{" "}
                Student ID
              </label>
              <input
                type="text"
                id="student_id"
                name="student_id"
                className="w-full p-2 border border-[#cccccc] rounded-md"
                placeholder="Enter your student ID"
                required
              />
            </div>

            {/* Department */}
            <div className="relative">
              <label className="block mb-2 text-black" htmlFor="department">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="mr-2 text-red-700"
                />{" "}
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                className="w-full p-2 border border-[#cccccc] rounded-md"
                placeholder="Enter your department"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Email */}
            <div className="relative">
              <label className="block mb-2 text-black" htmlFor="email">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-red-700"
                />{" "}
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-[#cccccc] rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* District */}
            <div className="relative text-black">
              <label className="block mb-2 text-black" htmlFor="district">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-red-700"
                />{" "}
                District
              </label>
              <select
                id="district"
                name="district"
                className="w-full p-2 border border-[#cccccc] rounded-md"
                required
              >
                <option value="" disabled selected>
                  Select your district
                </option>
                <option value="district1">District 1</option>
                <option value="district2">District 2</option>
                <option value="district3">District 3</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Blood Group */}
            <div className="relative text-black">
              <label className="block mb-2 text-black" htmlFor="blood_group">
                <FontAwesomeIcon icon={faTint} className="mr-2 text-red-700" />{" "}
                Blood Group
              </label>
              <select
                id="blood_group"
                name="blood_group"
                className="w-full p-2 border border-[#cccccc] rounded-md"
                required
              >
                <option value="" disabled selected>
                  Select your blood group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Studentship Status */}
            <div className="relative text-black">
              <label
                className="block mb-2 text-black"
                htmlFor="studentship_status"
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="mr-2 text-red-700"
                />{" "}
                Studentship Status
              </label>
              <select
                id="studentship_status"
                name="studentship_status"
                className="w-full p-2 border border-[#cccccc] rounded-md"
                required
              >
                <option value="" disabled selected>
                  Select studentship status
                </option>
                <option value="Student">Student</option>
                <option value="Non-Student">Non-Student</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-md focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
            >
              Sign Up to Save Lives
            </button>
          </div>
        </form>

        <footer className="text-center mt-6">
          <p>Thank you for being a donor!</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginForm;
