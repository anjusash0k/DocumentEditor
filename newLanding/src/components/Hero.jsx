import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../assets/background.png";
import "../Styles/ExploreAnimation.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="h-[80vh]  bg-black relative">
        <img
          src={bg}
          alt=""
          className="absolute w-[800px] left-48 top-16 transparent blur-[3px] z-0 rotate-image"
          data-aos="zoom-out"
          data-aos-duration="3000"
          data-aos-easing=""
        />
        <div className="text-white flex p-10 pt-28 ml-44 z-20 ">
          <div className="flex flex-col">
            <h1
              className="text-[95px] flex items-center z-20"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              EMPO
              <span
                className="text-transparent bg-clip-text"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                style={{
                  backgroundImage: `linear-gradient(100deg, 
                          #224cf0, 
                          #3789dd, 
                          #3285fb, 
                          #36509b, 
                          #2b3c70, 
                          #9a2da0, 
                          #8e49fa, 
                          #ef47b8, 
                          #ff43ff, 
                          #692f84, 
                          #602f80, 
                          #363265)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                W
              </span>
              ER YOUR
            </h1>

            <h1
              className="text-3xl z-20"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              REAL-TIME
            </h1>
            <h1
              className="text-6xl z-20"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              COLLABORATION!
            </h1>
          </div>
          <div>
            <div
              className="w-[400px] ml-60 absolute top-72 left-[800px] z-20"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="w-12 h-2 bg-gradient-to-r from-[#224cf0] via-[#3789dd] to-[#91078f] mb-5 z-20"></div>
              <div>
                Revolutionize teamwork with a live document editor designed for
                multiple users. Boost productivity and creativity through
                AI-powered features, enabling dynamic collaboration like never
                before.
              </div>
              <Link className="exploreanimation px-10 py-2 mt-8 text-xl  cursor-pointer"
              to="/Editor"
              >
                Create new document +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
