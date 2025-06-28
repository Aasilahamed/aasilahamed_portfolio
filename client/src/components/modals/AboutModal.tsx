interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/10 backdrop-blur-md text-white rounded-xl p-6 max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-user text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">About Me</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-blue-400/20 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-3xl text-blue-400"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">AASIL AHAMED S</h3>
              <p className="text-white/70">B.Sc. AI & ML Student | Full-Stack Developer | Event Organizer</p>
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Career Objective</h4>
            <div className="space-y-4 text-white/80">
              <p>
                A passionate B.Sc. Artificial Intelligence and Machine Learning student with a strong interest 
                in full-stack development and a knack for organizing events and building connections. I aim to 
                contribute to innovative tech teams where I can apply and grow my development skills, take 
                initiative, and collaborate effectively—while also creating meaningful experiences through 
                community engagement and leadership.
              </p>
              <p>
                Currently pursuing my degree at Rathinam College of Arts and Science, I have hands-on experience 
                in web development, AI technologies, and event management. I've successfully organized national-level 
                hackathons and developed AI-powered applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, designing UI/UX interfaces, 
                photography, or cooking. I believe in continuous learning and sharing knowledge with the 
                tech community through workshops and mentoring.
              </p>
            </div>
          </div>
          
          {/* Quick Facts */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Facts</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Based in Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-graduation-cap text-primary"></i>
                <span>B.Sc. AI & ML (2023-2026)</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-briefcase text-primary"></i>
                <span>Web Scraping Intern at Data Pattern</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-heart text-primary"></i>
                <span>Love Event Management & AI</span>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div>
            <h4 className="text-lg font-semibold mb-3">What I Value</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <i className="fas fa-lightbulb text-2xl text-primary mb-2"></i>
                <h5 className="font-semibold mb-1">Innovation</h5>
                <p className="text-sm text-muted-foreground">Always exploring new technologies and approaches</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <i className="fas fa-users text-2xl text-primary mb-2"></i>
                <h5 className="font-semibold mb-1">Collaboration</h5>
                <p className="text-sm text-muted-foreground">Believing in the power of teamwork</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <i className="fas fa-rocket text-2xl text-primary mb-2"></i>
                <h5 className="font-semibold mb-1">Excellence</h5>
                <p className="text-sm text-muted-foreground">Committed to delivering quality solutions</p>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <i className="fas fa-trophy text-primary mt-1"></i>
                <span className="text-sm">Finalist in UNESCO Ocean Literacy Program</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-users text-primary mt-1"></i>
                <span className="text-sm">Lead Organizer of "Hack Beyond Limits!" - National-Level 24-Hour Hackathon</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-chalkboard-teacher text-primary mt-1"></i>
                <span className="text-sm">Conducted tech workshops on UI/UX and Figma basics</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-handshake text-primary mt-1"></i>
                <span className="text-sm">Volunteered at Mega Placement Opportunity by Tamil Nadu Government</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
