import { useState, useEffect } from "react";
import Hotspot from "./Hotspot";
import { usePortfolio } from "../lib/stores/usePortfolio";
import { useTheme } from "../lib/stores/useTheme";

export default function BedroomScene() {
  const { openModal } = usePortfolio();
  const { isDarkMode, toggleTheme } = useTheme();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set standard video dimensions for positioning calculations immediately
    setVideoDimensions({ width: 1920, height: 1080 });
    setVideoLoaded(true);
  }, [isDarkMode]);

  const getResponsivePosition = (x: number, y: number) => {
    if (!videoLoaded) return { left: '50%', top: '50%' };
    
    // Calculate percentage positions based on video dimensions
    const leftPercent = (x / videoDimensions.width) * 100;
    const topPercent = (y / videoDimensions.height) * 100;
    
    return {
      left: `${leftPercent}%`,
      top: `${topPercent}%`
    };
  };

  console.log('BedroomScene render - videoLoaded:', videoLoaded, 'dimensions:', videoDimensions);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background bedroom video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        key={isDarkMode ? "night" : "day"}
      >
        <source 
          src={isDarkMode ? "/bedroom-night.mp4" : "/bedroom-day.mp4"} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      

      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
      </button>
      
      {/* Interactive Hotspots */}
      {videoLoaded && (
        <>
          {/* Laptop screen - Projects */}
          <Hotspot
            position={getResponsivePosition(400, 215)}
            size="large"
            icon="fas fa-laptop"
            label="Projects"
            description="View my latest work"
            onClick={() => openModal("projects")}
          />
          
          {/* Wall frame above desk - Certificates */}
          <Hotspot
            position={getResponsivePosition(355, 125)}
            size="medium"
            icon="fas fa-certificate"
            label="Certificates"
            description="Professional achievements"
            onClick={() => openModal("certificates")}
          />
          
          {/* Cat sleeping on rug - Fun Facts */}
          <Hotspot
            position={getResponsivePosition(480, 285)}
            size="small"
            icon="fas fa-cat"
            label="Fun Facts"
            description="Get to know me better"
            onClick={() => openModal("funfacts")}
          />
          
          {/* Bookshelf on left - Skills */}
          <Hotspot
            position={getResponsivePosition(150, 195)}
            size="medium"
            icon="fas fa-book"
            label="Skills"
            description="Technical expertise"
            onClick={() => openModal("skills")}
          />
          
          {/* Bed with pillows - About Me */}
          <Hotspot
            position={getResponsivePosition(120, 175)}
            size="large"
            icon="fas fa-user"
            label="About Me"
            description="My story and background"
            onClick={() => openModal("about")}
          />
          
          {/* Balcony area with plants - Contact */}
          <Hotspot
            position={getResponsivePosition(720, 185)}
            size="medium"
            icon="fas fa-envelope"
            label="Contact"
            description="Let's get in touch"
            onClick={() => openModal("contact")}
          />
          
          {/* Desk with papers - Resume */}
          <Hotspot
            position={getResponsivePosition(350, 245)}
            size="small"
            icon="fas fa-file-pdf"
            label="Resume"
            description="Download my CV"
            onClick={() => openModal("resume")}
          />
          
          {/* Plants area - Hobbies */}
          <Hotspot
            position={getResponsivePosition(590, 195)}
            size="small"
            icon="fas fa-seedling"
            label="Hobbies"
            description="Personal interests"
            onClick={() => openModal("hobbies")}
          />
        </>
      )}
    </div>
  );
}
