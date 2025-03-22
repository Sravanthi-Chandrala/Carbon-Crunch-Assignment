import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Parallax from "./ParallaxSlider";

import earthImage from "../Assets/earth.png";
import Ball from "../Assets/earth2.jpg";
import earth3 from "../Assets/earth3.jpg";
import earth4 from "../Assets/earth4.jpg";

const StatsSection = () => {
  const statsRef = useRef([]);

  // Adding images to the array
  const images = [
    earthImage,
    earth4,
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Animate the floating boxes
      statsRef.current.forEach((box, index) => {
        gsap.fromTo(
          box,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.3,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer" style={{ backgroundColor: "#F5F5F8" }}>
      <Parallax images={images}>
        {/* Floating Boxes - We'll keep these with z-index to ensure they show above images */}
        <div className="relative flex flex-col items-center lg:items-start space-y-6 lg:space-y-0 lg:ml-80 mt-20 z-10">
          {/* ESG High Performers Box */}
          <div
            ref={(el) => (statsRef.current[0] = el)}
            className="bg-green-600 text-white text-lg font-semibold p-4 rounded-md shadow-lg w-72 lg:w-80 text-center lg:text-left"
          >
            <span className="text-black text-2xl font-extrabold">3X</span> ESG High Performers Deliver A Higher Total Shareholder Return
          </div>

          {/* CEO Sustainability Box */}
          <div
            ref={(el) => (statsRef.current[1] = el)}
            className="bg-black text-white text-md font-semibold p-4 ml-[-250px] mt-[-100px] rounded-md shadow-lg w-72 lg:w-80 text-center lg:text-left"
          >
            <span className="text-white text-xl font-extrabold">98%</span> Of CEOs Agree Sustainability Is Their Responsibility
          </div>

          {/* Net Zero Target Box */}
          <div
            ref={(el) => (statsRef.current[2] = el)}
            className="bg-green-500 text-black text-md font-semibold p-4 rounded-md shadow-lg w-72 lg:w-80 text-center lg:text-left"
          >
            <span className="text-black text-lg font-bold">37%</span> Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track
          </div>

          {/* Emissions Reduction Box */}
          <div
            ref={(el) => (statsRef.current[3] = el)}
            className="bg-gray-900 text-white text-md font-semibold p-4 ml-[-270px] rounded-md shadow-lg w-72 lg:w-80 text-center lg:text-left"
          >
            <span className="text-white text-lg font-bold">18%</span> Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default StatsSection;