import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BookUser, Mail } from "lucide-react";

const ContactSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-10 flex items-center justify-center gap-20 lg:flex-row flex-col relative">
      {/* <div className="absolute h-full w-full bg-gradient-to-b from-indigo-500 via-transparent to-indigo-500/60"></div> */}

      <div className="">
        <div ref={textRef} className="text-left space-y-4 font-josefin">
          <h1 className="text-6xl font-bold tracking-tighter max-w-[250px]">
            Let’s get in touch
          </h1>
          <p className="text-xl font-medium">
            Don’t be afraid to say hello with us!
          </p>

          <div>
            <div className=" mb-4 flex gap-2 items-center">
              <div className="rounded-full p-2 border-2 border-gray-700">
                <Mail size={18} />
              </div>
              <span className="text-lg font-semibold text-gray-700">Email</span>
            </div>

            <div className="text-gray-500 font-medium md:ml-12 ">
              mayank@zenblazemedia@gmail.com
            </div>

            <div className="mb-4 flex gap-2 items-center mt-8">
              <div className="rounded-full p-2 border-2 border-gray-700">
                <BookUser size={18} />
              </div>
              <div>Fill our contact form</div>
            </div>
            <div className="flex items-center gap-1 mt-2 md:ml-10">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLScr6ELJkVDaXaeFNmj5ln7VS5-sw43pSa_TlkbtCDQ6v2E1sw/viewform?embedded=true"
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Go to Form
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img width={700} src="/contact-us.jpg" alt="" />
      </div>
    </section>
  );
};

export default ContactSection;
