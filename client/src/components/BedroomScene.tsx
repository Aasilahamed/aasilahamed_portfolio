import { useState, useEffect, useRef } from "react";
import Hotspot from "./Hotspot";
import { usePortfolio } from "../lib/stores/usePortfolio";
import { useTheme } from "../lib/stores/useTheme";

export default function BedroomScene() {
  const { openModal } = usePortfolio();
  const { isDarkMode, toggleTheme } = useTheme();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });
  const dayVideoRef = useRef<HTMLVideoElement>(null);
  const nightVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Set video dimensions based on actual bedroom scene dimensions
    setVideoDimensions({ width: 939, height: 478 });
    setVideoLoaded(true);
    
    // Ensure both videos are loaded and ready
    const loadVideos = async () => {
      try {
        if (dayVideoRef.current) {
          dayVideoRef.current.load();
        }
        if (nightVideoRef.current) {
          nightVideoRef.current.load();
        }
        console.log('Videos reloaded for theme:', isDarkMode ? 'dark' : 'light');
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    };
    
    loadVideos();
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
        {/* Transition overlay for smoother mode switching */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 pointer-events-none ${
          isDarkMode ? 'opacity-20' : 'opacity-0'
        }`}></div>
        <video
          ref={dayVideoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isDarkMode ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => console.log('Day video loaded')}
          onError={(e) => console.error('Day video error:', e)}
        >
          <source src="/bedroom-day.mp4" type="video/mp4" />
        </video>
        <video
          ref={nightVideoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isDarkMode ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => console.log('Night video loaded')}
          onError={(e) => console.error('Night video error:', e)}
        >
          <source src="/bedroom-night.mp4" type="video/mp4" />
        </video>
      </div>
      

      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 z-30 w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 ${
          isDarkMode 
            ? 'bg-yellow-400/90 hover:bg-yellow-300 text-gray-900 border-yellow-300' 
            : 'bg-indigo-900/90 hover:bg-indigo-800 text-yellow-300 border-indigo-600'
        }`}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
      </button>
      
      {/* Mode indicator */}
      <div className={`absolute top-20 right-4 z-30 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/80 text-yellow-300 border border-yellow-300/50' 
          : 'bg-white/80 text-indigo-900 border border-indigo-300/50'
      }`}>
        {isDarkMode ? 'Night Mode' : 'Day Mode'}
      </div>
      
      {/* Interactive Hotspots */}
      {videoLoaded && (
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
