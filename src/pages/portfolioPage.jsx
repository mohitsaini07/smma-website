import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const colorClassMap = {
  purple: "bg-indigo-400",
  yellow: "bg-yellow-300",
  pink: "bg-pink-300",
  green: "bg-green-300",
  blue: "bg-blue-300",
  red: "bg-red-300",
  orange: "bg-orange-300",
};

const portfolioItems = [
  {
    id: 1,
    category: "video edits",
    title: "Cole Bussell",
    description: "The Best Hairstyle For Every Sport",
    image: "/long-video-thumbnail-2.jpg",
    link: "https://drive.google.com/file/d/1gm8f7W_F8xGpwGevK6b5DJqHipEudIFV/view?usp=sharing",
    color: "green",
  },
  {
    id: 2,
    category: "video edits",
    title: "What Happened",
    description: "When a Single Video Ruins a YouTuber's Reputation",
    image: "/long-video-thumbnail-1.png",
    link: "https://drive.google.com/file/d/1SsRkXYBVPT_-IdOKuqU9gPCf66UF3HXM/view?usp=sharing",
    color: "blue",
  },

  {
    id: 3,
    category: "short edits",
    title: "Cap Job",
    image: "/cap-job.png",
    link: "https://drive.google.com/file/d/1C1bGaROqc7YuKK6Xy7iFHtYBR69Fxk3L/view?usp=sharing",
    color: "red",
    description:
      "Dynamic edit showcasing cap flipping with rhythmic transitions.",
  },
  {
    id: 4,
    category: "short edits",
    title: "GaryeeEdit",
    image: "/very-rich.png",
    link: "https://drive.google.com/file/d/1f4uiBhnkSSGL_gr1Hb5xrez9rBI61jMz/view?usp=sharing",
    color: "blue",
    description:
      "Vibrant edit capturing luxury and excitement through quick cuts.",
  },
  {
    id: 5,
    category: "short edits",
    title: "King",
    image: "/king.png",
    link: "https://drive.google.com/file/d/1IuzsTIdqGShnngBJlgWqvcGdGt_lz50h/view?usp=sharing",
    color: "pink",
    description: "Regal edit that emphasizes strength and confidence.",
  },
  {
    id: 6,
    category: "short edits",
    title: "Modern Edits",
    image: "/moder-effect.png",
    link: "https://drive.google.com/file/d/1ColEqQ1tsaOiLus6jIwe9UBA2Hn5Q3n4/view?usp=sharing",
    color: "green",
    description: "Stylish project blending modern graphics with clean cuts.",
  },
  {
    id: 7,
    category: "short edits",
    title: "Motion Graphics",
    image: "/numbers.png",
    link: "https://drive.google.com/file/d/1SJuM4GGONfVVCs5rWtMIVbzBHHGBhDwq/view?usp=sharing",
    color: "yellow",
    description: "Engaging animations that simplify complex ideas.",
  },
  {
    id: 8,
    category: "short edits",
    title: "Portfolio",
    image: "/portfolio.png",
    link: "https://drive.google.com/file/d/1ZoFIoD7-ZF8lk4xtJs2Yj7gehgXNYL7r/view?usp=sharing",
    color: "purple",
    description: "Showcase of diverse editing styles and techniques.",
  },
  {
    id: 9,
    category: "short edits",
    title: "Simple",
    image: "/uk.png",
    link: "https://drive.google.com/file/d/1AKBnIuKK_hWGBpJJYvZGiKuujMyebt2X/view?usp=sharing",
    color: "orange",
    description: "Minimalist edit focusing on clean storytelling.",
  },
  {
    id: 10,
    category: "thumbnails",
    title: "Joshna Chinnappa",
    description:
      "A dynamic edit capturing the powerful moves and techniques of India's squash champion.",
    image: "/thumbnail-7.jpg",
    color: "purple",
  },
  {
    id: 11,
    category: "thumbnails",
    title: "The Power of Exercise",
    description:
      "An energetic visual breakdown of exercise benefits, motivating you to stay active.",
    image: "/thumbnail-2.jpeg",
    color: "yellow",
  },
  {
    id: 12,
    category: "thumbnails",
    title: "Tier - 3 to Amazon",
    description:
      "A compelling story of determination and growth, showcasing a journey from humble beginnings to success at Amazon.",
    image: "/thumbnail-5.jpg",
    color: "pink",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const cardRefs = useRef([]);

  const filteredItems = portfolioItems.filter((item) =>
    activeCategory === "all"
      ? true
      : activeCategory === "thumbnails"
      ? false
      : item.category === activeCategory
  );

  useEffect(() => {
    cardRefs.current = [];
  }, [activeCategory]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [filteredItems]);

  const addToRefs = useCallback((el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  }, []);

  return (
    <section id="portfolio" className="py-16 bg-gray-50 font-josefin">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-12">PORTFOLIO</h1>
        {/* Filter Navigation */}
        <div className="flex justify-center space-x-4 mb-10 sm:text-lg text-base">
          {["all", "thumbnails", "video edits", "short edits"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "text-indigo-600 font-bold"
                    : "hover:text-indigo-400"
                }`}
              >
                {category === "all"
                  ? "All"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="bg-white rounded-lg p-4 shadow-lg transform transition-all hover:scale-105"
            >
              <a href={item.link} target="_blank">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </a>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                {item.link && (
                  <a href={item.link} className="text-blue-600 block group">
                    See project{" "}
                    <span className="group-hover:rotate-90 transition-all duration-300 ease-in-out">
                      {" "}
                      →{" "}
                    </span>
                  </a>
                )}

                <p
                  className={`pt-2 pb-1 px-2 rounded-full text-xs ${
                    colorClassMap[item.color] || "bg-gray-300"
                  } uppercase font-bold text-white`}
                >
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
