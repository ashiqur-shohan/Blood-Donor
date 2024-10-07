import Awareness from "../components/Home/Awareness";
import DonorStatistics from "../components/Home/DonorStatistics";
import Hero from "../components/Home/Hero";
// import Hero1 from "../components/Home/Hero1";
import NewUser from "../components/Home/NewUser";
const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <Hero1/> */}
      <DonorStatistics/>
      <NewUser/>
      <Awareness/>
    </div>
  );
};

export default Home;