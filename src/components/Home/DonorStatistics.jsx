import { Droplet,UserCheck, Users, UserPlus } from "lucide-react";

const DonorStatistics = () => {
  return (
    // <div className="bg-slate-100 py-8 lg:py-8">
    //   <h1 className="text-center text-3xl lg:text-4xl font-bold text-red-600 py-8 tracking-wide">
    //     Donor Statistics
    //   </h1>

    //   <div className="flex flex-col lg:flex-row gap-4 justify-between px-6">
    //     {/* Registered donor stat card */}
    //     <div className="flex flex-col gap-2 w-full lg:w-1/3 rounded-lg items-center bg-red-100 shadow-md p-4">
    //       <p className="font-semibold text-gray-700">Registered Donors</p>
    //       <Users className="text-red-600" size={41} />
    //       <p className="text-xl font-bold ">1500</p>
    //     </div>

    //     {/* New donor this month stat card */}
    //     <div className="flex flex-col gap-2 items-center  w-full lg:w-1/3 bg-red-100 shadow-md rounded-lg p-4">
    //       <p className="font-semibold text-gray-700">New Donors This Month</p>
    //       <UserPlus className="text-red-600" size={41} />
    //       <p className="text-xl font-bold ">1500</p>
    //     </div>

    //     {/* Active donor stat card */}
    //     <div className="flex flex-col gap-2 items-center w-full lg:w-1/3 bg-red-100 shadow-md rounded-lg p-4">
    //       <p className="font-semibold text-gray-700">Active Donors</p>
    //       <UserCheck className="text-red-600" size={41} />
    //       <p className="text-xl font-bold ">1500</p>
    //     </div>
    //   </div>
    // </div>

    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Our Impact
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Making a Difference Together
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Every donation counts. See how our community is saving lives.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  10,000+ Donors
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our growing community of dedicated blood donors.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Droplet className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  15,000+ Donations
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Total blood donations made through our platform.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <UserPlus className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  100 New Donors This Month
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                A growing number of life-savers have joined us this month
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <UserCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  5,000+ Active Donors
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Dedicated donors are ready to help when it matters most.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default DonorStatistics;
