import { useFormik } from "formik";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import PrimaryButton from "../../UI/PrimaryButton";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineBloodtype } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { districts } from "../../constants/district.js";
import { bloodGroups } from "../../constants/bloodGroup.js";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobile: "",
      nid: "",
      gender: "",
      district: "",
      bloodGroup: "",
      studentshipStatus: "",
      password: "",
    },
    onSubmit: function (values) {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="bg-white p-20 drop-shadow-2xl max-w-3xl mx-auto rounded-xl">
      <form
        className="flex flex-col gap-3 text-primary"
        onSubmit={formik.handleSubmit}
      >
        <div className="relative">
          <LuUser className="absolute text-2xl top-[14px] left-2.5" />
          <input
            type="text"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Full Name"
            className="w-full border border-primary pl-10 p-3.5 placeholder:text-primary focus:border-primary focus:outline-none"
          />
        </div>

        <div className="relative">
          <FaRegEnvelope className="absolute text-xl top-[17px] left-3" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full border border-primary pl-10 p-3.5 placeholder:text-primary focus:border-primary focus:outline-none"
          />
        </div>

        <div className="relative">
          <FiPhone className="absolute text-2xl text-primary top-4 left-3" />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          />
        </div>

        <div className="relative">
          <FaRegAddressCard className="absolute text-2xl text-primary top-4 left-3" />
          <input
            type="text"
            name="nid"
            placeholder="NID Number"
            onChange={formik.handleChange}
            value={formik.values.nid}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          />
        </div>

        <div className="relative">
          <FaRegUser className="absolute text-2xl text-primary top-4 left-3" />
          <select
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="relative">
          <CiGlobe className="absolute text-2xl text-primary top-4 left-3" />
          <select
            name="district"
            onChange={formik.handleChange}
            value={formik.values.district}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          >
            <option value="" disabled>
              Select District
            </option>
            {districts.map((district) => (
              <option className="capitalize" key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <MdOutlineBloodtype className="absolute text-2xl text-primary top-4 left-3" />
          <select
            name="bloodGroup"
            onChange={formik.handleChange}
            value={formik.values.bloodGroup}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            {bloodGroups.map((bloodGroup) => (
              <option
                className="capitalize"
                key={bloodGroup}
                value={bloodGroup}
              >
                {bloodGroup}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <PiStudent className="absolute text-2xl text-primary top-4 left-3" />
          <select
            name="studentshipStatus"
            onChange={formik.handleChange}
            value={formik.values.studentshipStatus}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          >
            <option value="" disabled>
              Select Studentship Status
            </option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
            <option value="ms">Masters</option>
            <option value="unemployed">Unemployed</option>
            <option value="employed">Employed</option>
          </select>
        </div>

        <div className="relative">
          <RiLockPasswordLine className="absolute text-2xl text-primary top-4 left-3" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          />
        </div>

        <PrimaryButton type="submit">Sign Up</PrimaryButton>
      </form>
    </div>
  );
};

export default SignUpForm;
