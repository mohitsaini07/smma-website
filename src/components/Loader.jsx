// src/components/Loader.jsx
import { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".left-window",
        { width: "50%" },
        { width: "0%", duration: 1.5, ease: "power4.inOut" }
      )
      .fromTo(
        ".right-window",
        { width: "50%" },
        { width: "0%", duration: 1.5, ease: "power4.inOut" },
        "-=1.5"
      )
      .fromTo(
        ".zenblaze-text",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" },
        "-=0.5"
      )
      .to(".zenblaze-text", {
        scale: 1.1,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-500 to-indigo-300">
      {/* Left and right panels for window effect */}
      <div className="absolute top-0 left-0 h-full bg-white left-window"></div>
      <div className="absolute top-0 right-0 h-full bg-white right-window"></div>

      <img src="/zenblaze-media-logo.png" alt="zenblaze-media" />
    </div>
  );
};

export default Loader;
