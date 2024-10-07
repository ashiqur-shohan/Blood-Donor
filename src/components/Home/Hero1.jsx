
// import { ArrowRightIcon } from "@heroicons/react/24/solid";
// import hero from "../../../public/hero_image.jfif"
import hero2 from "../../../public/blood_donation.jpg";
// const HeroSection = () => {
//   return (
//     <div className="relative bg-red-600 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="relative z-10 pb-8 bg-red-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

//           <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//             <div className="sm:text-center lg:text-left">
//               <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
//                 <span className="block xl:inline">Give the gift of life:</span>{" "}
//                 <span className="block text-red-200 xl:inline">
//                   Donate Blood Today
//                 </span>
//               </h1>
//               <p className="mt-3 text-base text-red-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                 Your donation can save up to three lives. Join our community of
//                 heroes and make a difference in someone's life today.
//               </p>
//               <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                 <div className="rounded-md shadow">
//                   <a
//                     href="#"
//                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-10"
//                   >
//                     Donate Now
//                   </a>
//                 </div>
//                 <div className="mt-3 sm:mt-0 sm:ml-3">
//                   <a
//                     href="#"
//                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
//                   >
//                     Find Donors
//                     <ArrowRightIcon
//                       className="ml-2 -mr-1 h-5 w-5"
//                       aria-hidden="true"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//       <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//         <img
//           className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
//           src={hero}
//           alt="Blood donation illustration"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



const Hero1 = () => {
  return (
    <div className="bg-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Save Lives: Donate Blood Today
            </h1>
            <p className="text-xl text-gray-600">
              Your donation can make a difference. Join our community of
              life-savers and help those in need.
            </p>
            <div className="space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300">
                Donate Now
              </button>
              <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold border-2 border-red-600 hover:bg-red-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="mt-10 md:mt-0">
            <img
              src={hero2}
              alt="Blood Donation"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;