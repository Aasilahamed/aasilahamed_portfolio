import { useState, useEffect } from "react";
import Hotspot from "./Hotspot";
import { usePortfolio } from "../lib/stores/usePortfolio";
import { useTheme } from "../lib/stores/useTheme";

interface BedroomSceneProps {
  showWelcome: boolean;
}

export default function BedroomScene({ showWelcome }: BedroomSceneProps) {
  const { openModal } = usePortfolio();
  const { isDarkMode, toggleTheme } = useTheme();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set video dimensions based on actual bedroom scene dimensions
    setVideoDimensions({ width: 939, height: 478 });
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
      {/* Background bedroom video with transition */}
      <div className="relative w-full h-full">
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isDarkMode ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bedroom-day.mp4" type="video/mp4" />
        </video>
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isDarkMode ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bedroom-night.mp4" type="video/mp4" />
        </video>
      </div>
      

      
      {/* Dark Mode Toggle - Only show after welcome title fades */}
      {!showWelcome && (
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
        </button>
      )}
      
      {/* Interactive Hotspots - Only show after welcome title fades */}
      {videoLoaded && !showWelcome && (
        <>
          {/* Laptop screen - Projects */}
          <Hotspot
            position={getResponsivePosition(380, 210)}
            size="medium"
            icon="fas fa-laptop"
            label="Projects"
            description="View my latest work"
            onClick={() => openModal("projects")}
          />
          
          {/* Wall frame above desk - Certificates */}
          <Hotspot
            position={getResponsivePosition(315, 115)}
            size="medium"
            icon="fas fa-certificate"
            label="Certificates"
            description="Professional achievements"
            onClick={() => openModal("certificates")}
          />
          
          {/* Cat sleeping on rug - Fun Facts */}
          <Hotspot
            position={getResponsivePosition(460, 350)}
            size="small"
            icon="fas fa-cat"
            label="Fun Facts"
            description="Get to know me better"
            onClick={() => openModal("funfacts")}
          />
          
          {/* Bed with pillows - About Me */}
          <Hotspot
            position={getResponsivePosition(95, 190)}
            size="medium"
            icon="fas fa-user"
            label="About Me"
            description="My story and background"
            onClick={() => openModal("about")}
          />
          
          {/* Balcony/window area - Contact */}
          <Hotspot
            position={getResponsivePosition(770, 190)}
            size="medium"
            icon="fas fa-envelope"
            label="Contact"
            description="Let's get in touch"
            onClick={() => openModal("contact")}
          />
          
          {/* Plant pot near desk - Hobbies */}
          <Hotspot
            position={getResponsivePosition(300, 280)}
            size="small"
            icon="fas fa-seedling"
            label="Hobbies"
            description="Personal interests"
            onClick={() => openModal("hobbies")}
          />
          
          {/* Bookshelf - Skills */}
          <Hotspot
            position={getResponsivePosition(150, 160)}
            size="medium"
            icon="fas fa-book"
            label="Skills"
            description="Technical expertise"
            onClick={() => openModal("skills")}
          />
          
          {/* Desk area - Resume */}
          <Hotspot
            position={getResponsivePosition(420, 260)}
            size="small"
            icon="fas fa-file-pdf"
            label="Resume"
            description="Download my CV"
            onClick={() => openModal("resume")}
          />
        </>
      )}
    </div>
  );
}
