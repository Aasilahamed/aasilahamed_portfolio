import { useState, useEffect } from "react";
import Hotspot from "./Hotspot";
import { usePortfolio } from "../lib/stores/usePortfolio";
import { useTheme } from "../lib/stores/useTheme";

export default function BedroomScene() {
  const { openModal } = usePortfolio();
  const { isDarkMode, toggleTheme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      console.log('Image loaded:', img.naturalWidth, img.naturalHeight);
      setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error('Failed to load bedroom image');
    };
    img.src = isDarkMode ? "/bedroom-scene-dark.png" : "/bedroom-scene.png";
  }, [isDarkMode]);

  const getResponsivePosition = (x: number, y: number) => {
    if (!imageLoaded) return { left: '50%', top: '50%' };
    
    // Calculate percentage positions based on image dimensions
    const leftPercent = (x / imageDimensions.width) * 100;
    const topPercent = (y / imageDimensions.height) * 100;
    
    return {
      left: `${leftPercent}%`,
      top: `${topPercent}%`
    };
  };

  console.log('BedroomScene render - imageLoaded:', imageLoaded, 'dimensions:', imageDimensions);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background bedroom image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${isDarkMode ? "/bedroom-scene-dark.png" : "/bedroom-scene.png"}")`
        }}
      />
      
      {/* Loading indicator */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading bedroom scene...</p>
          </div>
        </div>
      )}
      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
      </button>
      
      {/* Interactive Hotspots */}
      {imageLoaded && (
        <>
          {/* Laptop screen - Projects */}
          <Hotspot
            position={getResponsivePosition(380, 190)}
            size="large"
            icon="fas fa-laptop"
            label="Projects"
            description="View my latest work"
            onClick={() => openModal("projects")}
          />
          
          {/* Wall frame above desk - Certificates */}
          <Hotspot
            position={getResponsivePosition(320, 100)}
            size="medium"
            icon="fas fa-certificate"
            label="Certificates"
            description="Professional achievements"
            onClick={() => openModal("certificates")}
          />
          
          {/* Cat sleeping on rug - Fun Facts */}
          <Hotspot
            position={getResponsivePosition(450, 270)}
            size="small"
            icon="fas fa-cat"
            label="Fun Facts"
            description="Get to know me better"
            onClick={() => openModal("funfacts")}
          />
          
          {/* Bookshelf on left - Skills */}
          <Hotspot
            position={getResponsivePosition(180, 140)}
            size="medium"
            icon="fas fa-book"
            label="Skills"
            description="Technical expertise"
            onClick={() => openModal("skills")}
          />
          
          {/* Bed with pillows - About Me */}
          <Hotspot
            position={getResponsivePosition(120, 180)}
            size="large"
            icon="fas fa-user"
            label="About Me"
            description="My story and background"
            onClick={() => openModal("about")}
          />
          
          {/* Balcony area with plants - Contact */}
          <Hotspot
            position={getResponsivePosition(680, 160)}
            size="medium"
            icon="fas fa-envelope"
            label="Contact"
            description="Let's get in touch"
            onClick={() => openModal("contact")}
          />
          
          {/* Desk with papers - Resume */}
          <Hotspot
            position={getResponsivePosition(360, 220)}
            size="small"
            icon="fas fa-file-pdf"
            label="Resume"
            description="Download my CV"
            onClick={() => openModal("resume")}
          />
          
          {/* Hanging plants - Hobbies */}
          <Hotspot
            position={getResponsivePosition(520, 80)}
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
