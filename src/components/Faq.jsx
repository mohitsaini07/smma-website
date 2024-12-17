import { useState } from "react";

export default function Faq() {
  const faqData = [
    {
      question: "How is ZenBlazeMedia different ?",
      answer:
        "ZenBlazeMedia stands out by offering data-driven content marketing strategies. We focus on transparent reporting, and scalable solutions to ensure growth and success.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "Keeping out track record in mind we will beat your existing results by a huge margin.",
    },
    {
      question: "How do we communicate?",
      answer:
        "We do all communication in slack/whatsapp. Our editors and managers always ready to answer your questions.",
    },
    {
      question: "If I cancel, Do I get a refund?",
      answer:
        "We will refund you if we are not able to achieve the results that we promised.",
    },
    {
      question: "What is the pricing ?",
      answer:
        "Please schedule a call with our team to discuss the specific pricing for your unique needs.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-10 sm:py-16 lg:py-24 relative overflow-hidden bg-gray-50"
    >
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-200 bg-white shadow-lg cursor-pointer hover:bg-gray-50 rounded-lg ${
                activeIndex === index ? "bg-gray-50" : ""
              }`}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => handleToggle(index)}
              >
                <div className="flex sm:text-lg text-sm font-semibold text-gray-700 transition-all duration-200 ease-in-out">
                  {faq.question}
                </div>

                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ease-in-out ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`transition-all overflow-hidden duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-gray-500">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
