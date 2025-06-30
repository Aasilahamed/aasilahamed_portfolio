import { useState, useEffect } from "react";
import BedroomScene from "./BedroomScene";
import ProjectsModal from "./modals/ProjectsModal";
import CertificatesModal from "./modals/CertificatesModal";
import AboutModal from "./modals/AboutModal";
import SkillsModal from "./modals/SkillsModal";
import ContactModal from "./modals/ContactModal";
import FunFactsModal from "./modals/FunFactsModal";
import ResumeModal from "./modals/ResumeModal";
import HobbiesModal from "./modals/HobbiesModal";
import { usePortfolio } from "../lib/stores/usePortfolio";
import { useTheme } from "../lib/stores/useTheme";

export default function Portfolio() {
  const { activeModal, closeModal } = usePortfolio();
  const { isDarkMode } = useTheme();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      {/* Main bedroom scene */}
      <BedroomScene showWelcome={showWelcome} />
      
      {/* Modals */}
      {activeModal === "projects" && (
        <ProjectsModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === "certificates" && (
        <CertificatesModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === "about" && (
        <AboutModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === "skills" && (
        <SkillsModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === "contact" && (
        <ContactModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === "funfacts" && (
        <FunFactsModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === "resume" && (
        <ResumeModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === "hobbies" && (
        <HobbiesModal isOpen={true} onClose={closeModal} />
      )}
      
      {/* Welcome Title */}
      {showWelcome && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center transition-all duration-1000 animate-fade-in">
            <h1 className="text-white font-kalam text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-2xl" 
                style={{ 
                  textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
                }}>
              WELCOME TO THE
            </h1>
            <h2 className="text-white font-kalam text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-2xl"
                style={{ 
                  textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
                }}>
              PORTFOLIO OF
            </h2>
            <h3 className="text-white font-kalam text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl"
                style={{ 
                  textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)'
                }}>
              S AASIL AHAMED
            </h3>
          </div>
        </div>
      )}
      
      {/* Instructions - Only show after welcome title fades */}
      {!showWelcome && (
        <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm animate-fade-in">
          <div className="flex items-center gap-2">
            <i className="fas fa-hand-pointer"></i>
            <span>Click on objects to explore</span>
          </div>
        </div>
      )}
    </div>
  );
}
