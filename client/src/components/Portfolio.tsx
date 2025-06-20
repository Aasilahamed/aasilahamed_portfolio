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
      <BedroomScene />
      
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
      
      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="text-center text-white px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 animate-fade-in tracking-wider">
              WELCOME TO THE
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in tracking-wider">
              PORTFOLIO OF
            </h2>
            <h1 className="text-4xl md:text-6xl font-black mb-2 animate-fade-in-delay text-orange-400 tracking-widest">
              S AASIL AHAMED
            </h1>
            <p className="text-lg md:text-xl font-semibold animate-fade-in-delay-2 text-orange-300 tracking-wide">
              [noewester]
            </p>
          </div>
        </div>
      )}
      
      {/* Instructions */}
      <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
        <div className="flex items-center gap-2">
          <i className="fas fa-hand-pointer"></i>
          <span>Click on objects to explore</span>
        </div>
      </div>
    </div>
  );
}
