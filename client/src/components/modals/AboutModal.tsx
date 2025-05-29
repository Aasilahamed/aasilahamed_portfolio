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
      <div className="relative bg-card text-card-foreground rounded-lg p-6 max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-border shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-user text-2xl text-primary"></i>
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-3xl text-primary"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <p className="text-muted-foreground">Passionate about creating amazing digital experiences</p>
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <h4 className="text-lg font-semibold mb-3">My Story</h4>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate full-stack developer with over 5 years of experience building 
                web applications and digital solutions. My journey started with curiosity about how 
                websites work, and it has evolved into a career dedicated to crafting exceptional 
                user experiences and robust backend systems.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies, and DevOps practices. 
                I love working with React, Node.js, and various cloud platforms to build scalable 
                applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community through blog posts and talks.
              </p>
            </div>
          </div>
          
          {/* Quick Facts */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Facts</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Based in San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-graduation-cap text-primary"></i>
                <span>Computer Science Degree</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-briefcase text-primary"></i>
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-heart text-primary"></i>
                <span>Love Problem Solving</span>
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
          
          {/* Current Focus */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Currently Learning</h4>
            <div className="flex flex-wrap gap-2">
              {["Rust", "WebAssembly", "Machine Learning", "Blockchain", "AR/VR"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
