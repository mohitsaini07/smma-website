import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ServicesCard from "../components/ServiceCard";
import { SplitText } from "../components/ui/SplitText";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Video Editing",
      icon: "/video-editing-icon.png",
      img: "/video-editing.jpeg",
      details: `Professional video editing with color grading, motion graphics, smooth cuts, and sound effects. Includes intros, outros, stock footage, and high-quality thumbnails or reel covers.`,
    },
    {
      id: 2,
      title: "Short Form Content Repurposing",
      icon: "/content-repurposing-icon.png",
      img: "/content.jpg",
      details: `Convert long videos or podcasts into short, engaging content. We provide scripts, editing, platform publishing, CTAs, and AI tools to boost views, followers, and leads.`,
    },
    {
      id: 3,
      title: "Social Media Management (SMM)",
      icon: "/social-media-icon.png",
      img: "/instagram.jpg",
      details: `
  <strong>Instagram:</strong> Reel editing, covers, graphics, captions, and hashtags.<br/>
  <strong>LinkedIn & Twitter:</strong> Profile optimization, posts, video editing, carousels, and engagement strategies.`,
    },
    {
      id: 4,
      title: "360° YouTube Management",
      icon: "youtube.png",
      img: "/youtube-image.jpg",
      details: `Complete YouTube management with video editing, thumbnails, SEO optimization, and analytics. Includes content for community tabs and growth insights.`,
    },
  ];

  const formatDetails = (details) => {
    return (
      <p
        className="mb-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: details.trim() }}
      ></p>
    );
  };

  return (
    <div
      id="services"
      className="bg-gray-100 sm:py-20 py-10 font-josefin w-full max-w-full overflow-x-hidden flex items-center justify-center flex-col"
    >
      <SplitText
        text="Services"
        className="text-4xl md:text-5xl pt-3 font-poppins font-semibold text-gray-800 mb-12"
        delay={50}
      />
      <VerticalTimeline>
        {services.map((service, index) => (
          <ServicesCard
            key={`service-${index}`}
            service={{ ...service, details: formatDetails(service.details) }}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Services;
