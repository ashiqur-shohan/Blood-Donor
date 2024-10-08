import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-red-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to save lives?</span>
          <span className="block text-red-200">Join our community today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="./signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
            >
              Register as Donor
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to="./donor-list"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800"
            >
              Find Donor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
