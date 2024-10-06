import { UserCheck, Users, UserPlus } from "lucide-react";
const DonorStatistics = () => {
  return (
    <div className="bg-slate-100 py-8">
      <h1 className="text-center text-3xl lg:text-4xl font-bold  py-8 tracking-wide">
        Donor Statistics
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 justify-between px-6">
        {/* Registered donor stat card */}
        <div className="flex flex-col gap-2 w-full lg:w-1/3 rounded-lg items-center bg-red-100 shadow-md p-4">
          <p className="font-semibold text-gray-700">Registered Donors</p>
          <Users className="text-red-600" size={41} />
          <p className="text-xl font-bold ">1500</p>
        </div>

        {/* New donor this month stat card */}
        <div className="flex flex-col gap-2 items-center  w-full lg:w-1/3 bg-red-100 shadow-md rounded-lg p-4">
          <p className="font-semibold text-gray-700">New Donors This Month</p>
          <UserPlus className="text-red-600" size={41} />
          <p className="text-xl font-bold text-red-600">1500</p>
        </div>

        {/* Active donor stat card */}
        <div className="flex flex-col gap-2 items-center w-full lg:w-1/3 bg-red-100 shadow-md rounded-lg p-4">
          <p className="font-semibold text-gray-700">Active Donors</p>
          <UserCheck className="text-red-600" size={41} />
          <p className="text-xl font-bold text-red-600">1500</p>
        </div>
      </div>
    </div>
  );
};

export default DonorStatistics;
