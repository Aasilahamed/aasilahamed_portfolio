import { useState, useEffect } from "react";
import Hotspot from "./Hotspot";
import { usePortfolio } from "../lib/stores/usePortfolio";

export default function BedroomScene() {
  const { openModal } = usePortfolio();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setImageLoaded(true);
    };
    img.src = "/bedroom-scene.png";
  });

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

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background bedroom image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/bedroom-scene.png")`
        }}
      />
      
      {/* Interactive Hotspots */}
      {imageLoaded && (
        <>
          {/* Laptop on desk - Projects */}
          <Hotspot
            position={getResponsivePosition(400, 180)}
            size="large"
            icon="fas fa-laptop"
            label="Projects"
            description="View my latest work"
            onClick={() => openModal("projects")}
          />
          
          {/* Wall frame - Certificates */}
          <Hotspot
            position={getResponsivePosition(250, 120)}
            size="medium"
            icon="fas fa-certificate"
            label="Certificates"
            description="Professional achievements"
            onClick={() => openModal("certificates")}
          />
          
          {/* Cat on floor - Fun Facts */}
          <Hotspot
            position={getResponsivePosition(420, 250)}
            size="small"
            icon="fas fa-cat"
            label="Fun Facts"
            description="Get to know me better"
            onClick={() => openModal("funfacts")}
          />
          
          {/* Bookshelf behind desk - Skills */}
          <Hotspot
            position={getResponsivePosition(200, 160)}
            size="medium"
            icon="fas fa-book"
            label="Skills"
            description="Technical expertise"
            onClick={() => openModal("skills")}
          />
          
          {/* Bed area - About Me */}
          <Hotspot
            position={getResponsivePosition(150, 200)}
            size="large"
            icon="fas fa-user"
            label="About Me"
            description="My story and background"
            onClick={() => openModal("about")}
          />
          
          {/* Balcony/Window area - Contact */}
          <Hotspot
            position={getResponsivePosition(650, 120)}
            size="medium"
            icon="fas fa-envelope"
            label="Contact"
            description="Let's get in touch"
            onClick={() => openModal("contact")}
          />
          
          {/* Desk papers - Resume */}
          <Hotspot
            position={getResponsivePosition(380, 200)}
            size="small"
            icon="fas fa-file-pdf"
            label="Resume"
            description="Download my CV"
            onClick={() => openModal("resume")}
          />
          
          {/* Plants around room - Hobbies */}
          <Hotspot
            position={getResponsivePosition(500, 120)}
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
