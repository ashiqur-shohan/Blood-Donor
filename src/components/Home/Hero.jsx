import hero_image from "../../../public/blood_donation.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={hero_image}
        alt="Blood donation Hero image"
        className="w-full h-auto rounded-lg"
      />
      <div className=" absolute bottom-24 lg:bottom-80 left-10 lg:left-28">
        <button className=" text-sm  lg:font-semibold px-2 lg:px-6 lg:py-3 rounded-sm lg:rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-300">
          <span className="hidden lg:block">Register as Donor</span>
          <span className="block lg:hidden">Register</span>
        </button>
      </div>
    </div>
    // <div className="bg-red-600 text-white py-20">
    //   <div className="container mx-auto px-4 text-center">
    //     <h1 className="text-4xl md:text-5xl font-bold mb-4">
    //       Save Lives on Campus
    //     </h1>
    //     <p className="text-xl mb-8">
    //       Connect student donors with those in need, right here at our
    //       university.
    //     </p>
    //     <div className="flex justify-center space-x-4">
    //       <a
    //         href="#"
    //         className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
    //       >
    //         Become a Donor
    //       </a>
    //       <a
    //         href="#"
    //         className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition duration-300"
    //       >
    //         Find a Donor
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
