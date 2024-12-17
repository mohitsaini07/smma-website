import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../ui/Button";
import { Phone } from "lucide-react";
import Tags from "./Tags";
import Magnet from "./ui/MagnetEffect";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1 }
    );
  }, []);

  return (
    <section
      id="home"
      className="md:py-24 px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center h-screen"
    >
      <div
        ref={textRef}
        className="text-gray-700 backdrop-filter font-poppins sm:pt-0 pt-36"
      >
        <div className="text-3xl md:text-4xl">Hello, We are</div>
        <div className="text-3xl md:text-6xl font-extrabold bg-gradient-to-tl from-slate-800 via-indigo-500 to-zinc-400 bg-clip-text text-transparent">
          ZenBlazeMedia
        </div>
        <div className="text-3xl md:text-4xl font-semibold">
          The Content Marketing Agency
        </div>
        <p className="text-sm max-w-xl md:text-base sm:mt-2 mt-4 sm:mb-10 mb-8 uppercase">
          We help enterpreneurs and creators to grow their brand organically on
          social Media and build inbound and outbound lead gen system.
        </p>
        <a href="https://calendly.com/mayank938988/30min" target="_blank">
          <Magnet padding={50} disabled={false}>
            <Button title="Book a slot" icon={<Phone size={18} />} />
          </Magnet>
        </a>
        {/* Social Media  */}
        <div className="flex items-center mt-6 sm:mt-10 gap-4">
          <div className="social-button">
            <button className="relative w-10 h-10 rounded-full group">
              <div className="floater w-full h-full absolute top-0 left-0 bg-purple-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <a
                href="https://www.instagram.com/zenblazemedia?igsh=YjNwZzAxbHU1NWR5"
                target="_blank"
              >
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-purple-400 rounded-full">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 22 22"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                      className="group-hover:fill-[#171543] fill-white duration-300"
                    ></path>
                    <path
                      d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                      className="group-hover:fill-[#171543] fill-white duration-300"
                    ></path>
                  </svg>
                </div>
              </a>
            </button>
          </div>
          <div className="social-button">
            <button className="relative size-10 rounded-full group">
              <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <a
                href="https://x.com/MayankS70553167?t=4ewck12UvxiyYAWMvouSqw&s=08"
                target="_blank"
              >
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 22 22"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8115 9.3155L20.8253 0H18.9263L11.9679 8.08852L6.41015 0H0L8.40433 12.2313L0 22H1.89914L9.24745 13.4583L15.1168 22H21.5269L12.811 9.3155H12.8115ZM10.2103 12.339L9.35878 11.1211L2.58343 1.42964H5.5004L10.9682 9.25094L11.8197 10.4689L18.9272 20.6354H16.0102L10.2103 12.3395V12.339Z"
                      className="group-hover:fill-[#171543] fill-white duration-300"
                    ></path>
                  </svg>
                </div>
              </a>
            </button>
          </div>
          <div className="social-button">
            <button className="relative size-10 rounded-full group">
              <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <a
                href="https://www.linkedin.com/company/zenblazemedia/"
                target="_blank"
              >
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:fill-[#171543] fill-white duration-300"
                      d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 flex items-center justify-center">
        <img
          className="md:max-w-xl max-w-xs "
          src="./landing-page.png"
          alt="Landing Page"
        />
        <div className="absolute right-4 md:right-4 md:bottom-20 bottom-40 transform -translate-y-1/2 md:translate-y-0">
          <Tags value="20+" mainText="Happy" subText="Clients" color="indigo" />
        </div>
        <div className="absolute sm:left-36 bottom-8 md:top-10">
          <Tags
            value="24/7"
            mainText="Support"
            subText="Always Available"
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
