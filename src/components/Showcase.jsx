import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRocket, FaChartLine, FaBullhorn } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const iconsRef = useRef([]);
  const textRef = useRef();

  useEffect(() => {
    iconsRef.current.forEach((icon) => {
      gsap.fromTo(
        icon,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className=" flex items-center flex-col justify-center px-6 py-12 lg:py-16">
      <h1 className="text-3xl mb-10 sm:text-4xl uppercase text-center">
        Our Exclusive{" "}
        <span className="sm:text-5xl bg-gradient-to-tl from-slate-800 via-indigo-500 font-bold to-zinc-400 bg-clip-text text-transparent">
          Benefits
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8 md:px-20 text-center max-w-7xl">
        {/* Card 1 */}
        <div
          className="bg-gray-200 text-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          ref={(el) => (iconsRef.current[0] = el)}
        >
          <FaRocket className="text-indigo-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-black">
            Just 1hr/week of Your Time
          </h2>
          <p className="text-gray-700 mt-2">
            Our streamlined processes mean minimal time commitment from you,
            while we handle the heavy lifting of your digital strategy.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-gray-200 text-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          ref={(el) => (iconsRef.current[1] = el)}
        >
          <FaChartLine className="text-indigo-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-black">
            Lead Generation Machine
          </h2>
          <p className="text-gray-700 mt-2">
            We create customized strategies to generate a consistent flow of
            high-quality leads, driving growth and revenue for your business.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-gray-200 text-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          ref={(el) => (iconsRef.current[2] = el)}
        >
          <FaBullhorn className="text-indigo-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-black">Viral Growth</h2>
          <p className="text-gray-700 mt-2">
            We help your brand create impactful and engaging content that drives
            exponential reach and engagement on social media.
          </p>
        </div>

        {/* Additional Card or Text if Needed */}
        <div
          className="bg-gray-200 text-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          ref={textRef}
        >
          <h2 className="text-2xl font-bold mb-4 text-black">
            Your Success, Our Goal
          </h2>
          <p className="text-gray-700">
            Partner with ZenBlazeMedia to unlock your brand’s potential. With
            our expertise in digital marketing, we guarantee exceptional
            results, tailored strategies, and a dedicated team to elevate your
            online presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
