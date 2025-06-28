import { useState } from "react";

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  verifyUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Network Topologies & Technologies",
    issuer: "Infosys Springboard",
    date: "2023",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23007ACC'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23FFF' rx='10'/%3E%3Ccircle cx='150' cy='120' r='15' fill='%23007ACC'/%3E%3Ccircle cx='250' cy='120' r='15' fill='%23007ACC'/%3E%3Cline x1='165' y1='120' x2='235' y2='120' stroke='%23007ACC' stroke-width='2'/%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%23007ACC' font-size='14' font-weight='bold'%3ENetwork Topologies%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' fill='%23007ACC' font-size='12'%3E%26 Technologies%3C/text%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23007ACC' font-size='12'%3EInfosys Springboard%3C/text%3E%3C/svg%3E",
    credentialId: "INFOSYS-NT-2023"
  },
  {
    id: 2,
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "2023",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%233776AB'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23FFF' rx='10'/%3E%3Cpath d='M180 100 Q190 90 200 100 Q210 110 220 100' fill='none' stroke='%233776AB' stroke-width='3'/%3E%3Ccircle cx='190' cy='120' r='8' fill='%23FFD43B'/%3E%3Ccircle cx='210' cy='120' r='8' fill='%233776AB'/%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%233776AB' font-size='16' font-weight='bold'%3EPython Basics%3C/text%3E%3Ctext x='200' y='190' text-anchor='middle' fill='%233776AB' font-size='12'%3EInfosys Springboard%3C/text%3E%3Ctext x='200' y='210' text-anchor='middle' fill='%233776AB' font-size='12'%3E2023%3C/text%3E%3C/svg%3E",
    credentialId: "INFOSYS-PY-2023"
  },
  {
    id: 3,
    title: "Soft Skills for IT",
    issuer: "Great Learning Academy",
    date: "2023",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23FF6B35'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23FFF' rx='10'/%3E%3Ccircle cx='180' cy='110' r='12' fill='%23FF6B35'/%3E%3Ccircle cx='220' cy='110' r='12' fill='%23FF6B35'/%3E%3Cpath d='M170 130 Q200 140 230 130' fill='none' stroke='%23FF6B35' stroke-width='2'/%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%23FF6B35' font-size='14' font-weight='bold'%3ESoft Skills for IT%3C/text%3E%3Ctext x='200' y='190' text-anchor='middle' fill='%23FF6B35' font-size='12'%3EGreat Learning Academy%3C/text%3E%3Ctext x='200' y='210' text-anchor='middle' fill='%23FF6B35' font-size='12'%3E2023%3C/text%3E%3C/svg%3E",
    credentialId: "GLA-SS-2023"
  },
  {
    id: 4,
    title: "Introduction to Web Development",
    issuer: "LeadPro Infotech",
    date: "2023",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2361DAFB'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23FFF' rx='10'/%3E%3Crect x='80' y='80' width='240' height='140' fill='%23F8F9FA' rx='5'/%3E%3Crect x='90' y='90' width='220' height='20' fill='%2361DAFB'/%3E%3Crect x='90' y='120' width='100' height='60' fill='%23E9ECEF'/%3E%3Crect x='200' y='120' width='110' height='60' fill='%23E9ECEF'/%3E%3Ctext x='200' y='40' text-anchor='middle' fill='%23FFF' font-size='14' font-weight='bold'%3EWeb Development%3C/text%3E%3Ctext x='200' y='240' text-anchor='middle' fill='%2361DAFB' font-size='12'%3ELeadPro Infotech%3C/text%3E%3C/svg%3E",
    credentialId: "LEADPRO-WD-2023"
  }
];

export default function CertificatesModal({ isOpen, onClose }: CertificatesModalProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/10 backdrop-blur-md text-white rounded-xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-certificate text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Certificates & Credentials</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {!selectedCertificate ? (
          /* Certificates Grid */
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-muted rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{certificate.title}</h3>
                  <p className="text-primary font-medium mb-1">{certificate.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-3">{certificate.date}</p>
                  {certificate.credentialId && (
                    <p className="text-xs text-muted-foreground font-mono bg-muted-foreground/10 px-2 py-1 rounded">
                      ID: {certificate.credentialId}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Certificate Detail View */
          <div>
            <button
              onClick={() => setSelectedCertificate(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Certificates
            </button>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{selectedCertificate.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-building text-primary"></i>
                    <span className="text-muted-foreground">Issued by:</span>
                    <span className="font-medium">{selectedCertificate.issuer}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <i className="fas fa-calendar text-primary"></i>
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{selectedCertificate.date}</span>
                  </div>
                  
                  {selectedCertificate.credentialId && (
                    <div className="flex items-center gap-3">
                      <i className="fas fa-id-card text-primary"></i>
                      <span className="text-muted-foreground">Credential ID:</span>
                      <span className="font-mono text-sm bg-muted px-2 py-1 rounded">
                        {selectedCertificate.credentialId}
                      </span>
                    </div>
                  )}
                </div>
                
                {selectedCertificate.verifyUrl && (
                  <a
                    href={selectedCertificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors w-fit"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
