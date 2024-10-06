import Awareness from "../components/Home/Awareness";
import DonorStatistics from "../components/Home/DonorStatistics";
import Hero from "../components/Home/Hero";
import NewUser from "../components/Home/NewUser";
const Home = () => {
  return (
    <div>
      <Hero/>
      <DonorStatistics/>
      <NewUser/>
      <Awareness/>
    </div>
  );
};

export default Home;