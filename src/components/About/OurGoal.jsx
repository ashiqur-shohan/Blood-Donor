

const OurGoal = () => {
    return (
      <div>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Mission Statement Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              BloodDonor was created with a singular purpose: to foster a
              vibrant and responsive university blood donation community. Our
              mission is to connect students, faculty, and staff who are willing
              to donate blood with those in urgent need, creating a lifeline
              within our campus and beyond. We believe that by harnessing the
              power of our university community, we can make a significant
              impact on local blood supplies and potentially save countless
              lives.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* <UserPlusIcon className="h-12 w-12 text-red-500 mb-4" /> */}
                <h3 className="text-xl font-semibold mb-2">1. Register</h3>
                <p className="text-gray-700">
                  Sign up using your university email. Complete your profile
                  with your blood type and contact information. Verify your
                  account to become an active donor.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* <ClipboardDocumentListIcon className="h-12 w-12 text-red-500 mb-4" /> */}
                <h3 className="text-xl font-semibold mb-2">
                  2. Update Availability
                </h3>
                <p className="text-gray-700">
                  Regularly update your donation availability and any recent
                  donations. This helps maintain an accurate database of
                  potential donors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* <MagnifyingGlassIcon className="h-12 w-12 text-red-500 mb-4" /> */}
                <h3 className="text-xl font-semibold mb-2">
                  3. Search or Be Found
                </h3>
                <p className="text-gray-700">
                  Use our search feature to find compatible donors, or wait to
                  be contacted if your blood type is needed. Respond promptly to
                  donation requests.
                </p>
              </div>
            </div>
          </section>

          
        </div>
      </div>
    );
};

export default OurGoal;