import Image from "next/image";
import "./style.scss";

import cover from "/public/covers/cover-1.jpg";
import HomeCarousel from "./Carousel";

const Home = () => {
  return (
    <section>
      <div className="pb-5">
        <HomeCarousel />
      </div>
    </section>
  );
};

export default Home;
