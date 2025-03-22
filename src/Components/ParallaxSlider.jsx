// ParallaxSlider.js
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import earthImage from "../Assets/earth.png";
import Ball from "../Assets/earth2.jpg";
import earth3 from "../Assets/earth3.jpg";
import earth4 from "../Assets/earth4.jpg";

const Parallax = ({ children, images = [earthImage] }) => {
  const parallaxRef = useRef(null);
  const imagesRef = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const registerImageRef = (el, index) => {
    imagesRef.current[index] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
          
            const newIndex = Math.min(
              Math.floor(self.progress * images.length),
              images.length - 1
            );
            if (newIndex !== currentImageIndex) {
              setCurrentImageIndex(newIndex);
            }
          }
        }
      });

      // Apply parallax effect to each of the image
      imagesRef.current.forEach((img, index) => {
        if (img) {
          
          gsap.set(img, {
             opacity: index === 0 ? 1 : 0,
            scale: 1
          });

          //timing
          tl.to(img, {
            y: "-=100",
            scale: 1.1,
            duration: 1
          }, index);

         
          if (index < images.length - 1) {
            tl.to(img, {
              opacity: 0,
              duration: 0.5
            }, index + 0.5);
            
            tl.to(imagesRef.current[index + 1], {
              opacity: 1,
              duration: 0.5
            }, index + 0.5);
          }
        }
      });
    });

    return () => ctx.revert();
  }, [images, currentImageIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev < images.length - 1 ? prev + 1 : 0
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={parallaxRef}
      className="parallax flex flex-col lg:flex-row items-center justify-center py-16 px-6 ml-[200px] relative"
    >
      {/* Render all images, but only one will be visible at a time */}
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => registerImageRef(el, index)}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            index === 1 ? "left-0 right-0 w-screen" : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
            width: index === 1 ? "100vw" : "500px",
            height: "800px",
            backgroundPosition: "center",
            left: index === 1 ? "-200px" : "0", 
            opacity: index === currentImageIndex ? 1 : 0
          }}
        ></div>
      ))}

      {/* Children will be rendered here (the stats boxes) */}
      {children}
    </section>
  );
};

export default Parallax;