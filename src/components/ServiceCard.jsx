import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ServicesCard = ({ service }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          alt={service?.title}
          className="rounded-full object-cover w-full h-full"
          src={service?.img}
        />
      }
      contentStyle={{
        display: "flex",
        maxWidth: "100%",
        flexDirection: "column",
        color: "#232323",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="rounded-lg space-y-3 relative overflow-hidden font-josefin">
        <div className="w-24 h-24 bg-indigo-500 rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-3xl font-medium">
            {service.id}
          </p>
        </div>
        <div className="fill-indigo-500 w-12">
          <img src={service.icon} alt={service.icon} />
        </div>
        <h1 className="font-bold text-xl">{service.title}</h1>
        <p className="text-sm text-zinc-500 leading-6"> {service.details}</p>
      </div>
    </VerticalTimelineElement>
  );
};

export default ServicesCard;
