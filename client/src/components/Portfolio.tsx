import { useState } from "react";
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
      
      {/* Welcome overlay */}
      <div className={`absolute top-4 left-4 z-10 backdrop-blur-sm rounded-lg p-4 max-w-sm transition-all duration-500 ${
        isDarkMode 
          ? 'bg-black/70 text-white border border-white/20' 
          : 'bg-white/80 text-gray-800 border border-black/20'
      }`}>
        <h1 className="text-xl font-bold mb-2">Welcome to the Portfolio of</h1>
        <h2 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
          S AASIL AHAMED
        </h2>
        <p className="text-sm opacity-90">
          Click on different objects in the room to explore my work, skills, and experience!
        </p>
      </div>
      
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
