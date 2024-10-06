import Slider from "react-slick";
import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  UserCircleIcon,
  MapPinIcon,
  PhoneIcon,
  
} from "@heroicons/react/24/solid";
import { Droplet } from "lucide-react";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}


const NewUser = () => {
  const personData = [
    {
      fullName: "Emma Smith",
      bloodType: "B+",
      location: "Springfield, IL",
      mobileNumber: "(555) 123-4567",
    },
    {
      fullName: "Liam Johnson",
      bloodType: "A-",
      location: "Austin, TX",
      mobileNumber: "(555) 987-6543",
    },
    {
      fullName: "Olivia Williams",
      bloodType: "O+",
      location: "Seattle, WA",
      mobileNumber: "(555) 246-8135",
    },
    {
      fullName: "Noah Brown",
      bloodType: "AB-",
      location: "Miami, FL",
      mobileNumber: "(555) 369-2580",
    },
    {
      fullName: "Ava Davis",
      bloodType: "A+",
      location: "Boston, MA",
      mobileNumber: "(555) 147-2589",
    },
    {
      fullName: "Ethan Wilson",
      bloodType: "O-",
      location: "Denver, CO",
      mobileNumber: "(555) 753-9514",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
        <h1 className="text-center text-2xl lg:text-4xl font-semibold my-4 lg:my-8">New Registered Heros</h1>
      <Slider {...settings} className=" lg:w-3/4 mx-8 lg:mx-auto">
        {personData.map((person, index) => (
          <div
            key={index}
            className="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="px-6 py-4">
              <div className="flex items-center mb-4">
                <UserCircleIcon className="h-12 w-12 text-gray-400" />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {person.fullName}
                  </h2>
                  <div className="flex items-center mt-1">
                    <Droplet className="text-red-500 " />
                    <span className="text-sm font-medium text-red-500">
                      {person.bloodType}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{person.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>{person.mobileNumber}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}







// const NewUser = ({
//   fullName = "Emma Smith",
//   bloodType = "B+",
//   location = "Springfield, IL",
//   mobileNumber = "(555) 123-4567",
// }) => {
//   return (
//     <div className="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="px-6 py-4">
//         <div className="flex items-center mb-4">
//           <UserCircleIcon className="h-12 w-12 text-gray-400" />
//           <div className="ml-4">
//             <h2 className="text-xl font-semibold text-gray-800">{fullName}</h2>
//             <div className="flex items-center mt-1">
//               <HeartIcon className="h-5 w-5 text-red-500 mr-1" />
//               <span className="text-sm font-medium text-red-500">
//                 {bloodType}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="space-y-2">
//           <div className="flex items-center text-gray-600">
//             <MapPinIcon className="h-5 w-5 mr-2" />
//             <span>{location}</span>
//           </div>
//           <div className="flex items-center text-gray-600">
//             <PhoneIcon className="h-5 w-5 mr-2" />
//             <span>{mobileNumber}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default NewUser;