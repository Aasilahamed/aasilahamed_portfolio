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
    // Using a placeholder bedroom scene - in real implementation, you'd use the actual image
    img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 768'%3E%3Crect width='1024' height='768' fill='%238B4513'/%3E%3Crect x='0' y='500' width='1024' height='268' fill='%23DEB887'/%3E%3Crect x='100' y='300' width='200' height='150' fill='%23654321'/%3E%3Crect x='120' y='320' width='160' height='100' fill='%23000'/%3E%3Crect x='400' y='400' width='200' height='100' fill='%238B4513'/%3E%3Crect x='450' y='380' width='100' height='20' fill='%23C0C0C0'/%3E%3Crect x='800' y='200' width='150' height='200' fill='%23DEB887'/%3E%3Crect x='820' y='220' width='110' height='160' fill='%23FFF'/%3E%3Ccircle cx='200' cy='600' r='30' fill='%23FF6347'/%3E%3Crect x='700' y='100' width='80' height='120' fill='%23228B22'/%3E%3C/svg%3E";
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 768'%3E%3Crect width='1024' height='768' fill='%238B4513'/%3E%3Crect x='0' y='500' width='1024' height='268' fill='%23DEB887'/%3E%3Crect x='100' y='300' width='200' height='150' fill='%23654321'/%3E%3Crect x='120' y='320' width='160' height='100' fill='%23000'/%3E%3Crect x='400' y='400' width='200' height='100' fill='%238B4513'/%3E%3Crect x='450' y='380' width='100' height='20' fill='%23C0C0C0'/%3E%3Crect x='800' y='200' width='150' height='200' fill='%23DEB887'/%3E%3Crect x='820' y='220' width='110' height='160' fill='%23FFF'/%3E%3Ccircle cx='200' cy='600' r='30' fill='%23FF6347'/%3E%3Crect x='700' y='100' width='80' height='120' fill='%23228B22'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Interactive Hotspots */}
      {imageLoaded && (
        <>
          {/* Laptop on desk - Projects */}
          <Hotspot
            position={getResponsivePosition(500, 390)}
            size="large"
            icon="fas fa-laptop"
            label="Projects"
            description="View my latest work"
            onClick={() => openModal("projects")}
          />
          
          {/* Wall frame - Certificates */}
          <Hotspot
            position={getResponsivePosition(875, 300)}
            size="medium"
            icon="fas fa-certificate"
            label="Certificates"
            description="Professional achievements"
            onClick={() => openModal("certificates")}
          />
          
          {/* Cat on floor - Fun Facts */}
          <Hotspot
            position={getResponsivePosition(200, 600)}
            size="small"
            icon="fas fa-cat"
            label="Fun Facts"
            description="Get to know me better"
            onClick={() => openModal("funfacts")}
          />
          
          {/* Bookshelf - Skills */}
          <Hotspot
            position={getResponsivePosition(740, 160)}
            size="medium"
            icon="fas fa-book"
            label="Skills"
            description="Technical expertise"
            onClick={() => openModal("skills")}
          />
          
          {/* Bed area - About Me */}
          <Hotspot
            position={getResponsivePosition(500, 500)}
            size="large"
            icon="fas fa-user"
            label="About Me"
            description="My story and background"
            onClick={() => openModal("about")}
          />
          
          {/* Window area - Contact */}
          <Hotspot
            position={getResponsivePosition(50, 200)}
            size="medium"
            icon="fas fa-envelope"
            label="Contact"
            description="Let's get in touch"
            onClick={() => openModal("contact")}
          />
          
          {/* Desk area - Resume */}
          <Hotspot
            position={getResponsivePosition(550, 420)}
            size="small"
            icon="fas fa-file-pdf"
            label="Resume"
            description="Download my CV"
            onClick={() => openModal("resume")}
          />
          
          {/* Plants - Hobbies */}
          <Hotspot
            position={getResponsivePosition(750, 500)}
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
