// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Workflow = () => {
  // const stepsRef = useRef([]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   stepsRef.current.forEach((step) => {
  //     gsap.fromTo(
  //       step,
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: step,
  //           start: "top center+=200",
  //           end: "top center",
  //           scrub: true,
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div className=" text-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Our <span className="text-indigo-500">Creative Journey</span>
          </h1>
          <p className="mt-2 sm:text-left text-center text-gray-400">
            The process we follow to help you GROW and SELL on social media that
            takes just 4hrs/month of your time.
          </p>
          <div>
            <a href="https://calendly.com/mayank938988/30min" target="_blank">
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded">
                Get Started →
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex">
          \{" "}
          <div className="ml-16 space-y-10">
            {/* Step 1 */}
            <div
              className="relative p-6 bg-gray-300 rounded-lg shadow-lg"
              // ref={(el) => (stepsRef.current[0] = el)}
            >
              <div className="absolute left-[-60px] top-0 text-6xl font-extrabold text-gray-700">
                1
              </div>
              <h2 className="text-2xl font-bold text-indigo-500">Onboarding</h2>
              <p className="mt-2 text-gray-700">
                We start by getting on an onboarding call to learn about you,
                your business, niche, target audience, goals, and more.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="relative p-6 bg-gray-900 rounded-lg shadow-lg"
              // ref={(el) => (stepsRef.current[1] = el)}
            >
              <div className="absolute left-[-60px] top-0 text-6xl font-extrabold text-gray-700">
                2
              </div>
              <h2 className="text-2xl font-bold text-indigo-500">Research</h2>
              <p className="mt-2 text-gray-300">
                Once we get a couple hundred niche-related viral videos onto a
                spreadsheet, we study the video hooks, topics, layouts, etc.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="relative p-6 bg-gray-300 rounded-lg shadow-lg"
              // ref={(el) => (stepsRef.current[2] = el)}
            >
              <div className="absolute left-[-60px] top-0 text-6xl font-extrabold text-gray-600">
                3
              </div>
              <h2 className="text-2xl font-bold text-indigo-500">Scripting</h2>
              <p className="mt-2 text-gray-700">
                Our professional copywriters will take the research and
                everything we learned on the onboarding call and create viral
                scripts.
              </p>
            </div>

            {/* Step 4 */}
            <div
              className="relative p-6 bg-gray-900 rounded-lg shadow-lg"
              // ref={(el) => (stepsRef.current[2] = el)}
            >
              <div className="absolute left-[-60px] top-0 text-6xl font-extrabold text-gray-600">
                4
              </div>
              <h2 className="text-2xl font-bold text-indigo-500">Shooting</h2>
              <p className="mt-2 text-gray-300">
                That’s the only thing you need to do, but we got you covered in
                that, our social media manager is on a call with you during
                recording to make sure the message is delivered in the best way
                possible(optional), This process takes just 4hrs/month.
              </p>
            </div>

            {/* Step 5 */}
            <div
              className="relative p-6 bg-gray-300 rounded-lg shadow-lg"
              // ref={(el) => (stepsRef.current[2] = el)}
            >
              <div className="absolute left-[-60px] top-0 text-6xl font-extrabold text-gray-600">
                5
              </div>
              <h2 className="text-2xl font-bold text-indigo-500">Scripting</h2>
              <p className="mt-2 text-gray-700">
                Our Professional editor will take the raw files you filmed and
                will edit them in your own custom editing style, and Finally we
                manually post your videos.
              </p>
            </div>

            {/* Step 6 */}
            <div
              className="relative p-6 bg-gray-900 rounded-lg shadow-lg"
              // ref={(el) => (stepsRef.current[2] = el)}
            >
              <div className="absolute left-[-60px] top-0 text-6xl font-extrabold text-gray-600">
                6
              </div>
              <h2 className="text-2xl font-bold text-indigo-500">
                Inbound Leads
              </h2>
              <p className="mt-2 text-gray-300">
                We install our inbound lead generation system, which converts
                your followers into sales by giving away free assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
