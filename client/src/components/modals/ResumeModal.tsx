interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcfsu...'; // This would be your actual PDF data
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <i className="fas fa-file-pdf text-2xl text-primary"></i>
            <h2 className="text-2xl font-bold">Resume</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Resume Preview */}
        <div className="space-y-6">
          {/* Header Section */}
          <div className="text-center border-b border-border pb-6">
            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
            <p className="text-lg text-primary mb-2">Full Stack Developer</p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span><i className="fas fa-envelope mr-1"></i> hello@example.com</span>
              <span><i className="fas fa-phone mr-1"></i> +1 (234) 567-890</span>
              <span><i className="fas fa-map-marker-alt mr-1"></i> San Francisco, CA</span>
            </div>
          </div>
          
          {/* Experience */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-primary">Professional Experience</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-semibold">Senior Full Stack Developer</h5>
                    <p className="text-muted-foreground">TechCorp Inc.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2022 - Present</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Led development of microservices architecture serving 1M+ users</li>
                  <li>Improved application performance by 40% through optimization</li>
                  <li>Mentored 5 junior developers and established coding standards</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-semibold">Full Stack Developer</h5>
                    <p className="text-muted-foreground">StartupXYZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2020 - 2022</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Built responsive web applications using React and Node.js</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  <li>Collaborated with design team to create intuitive user interfaces</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-primary">Education</h4>
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-semibold">Bachelor of Science in Computer Science</h5>
                <p className="text-muted-foreground">University of California, Berkeley</p>
              </div>
              <span className="text-sm text-muted-foreground">2016 - 2020</span>
            </div>
          </div>
          
          {/* Key Skills */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-primary">Key Skills</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold mb-2">Frontend</h5>
                <ul className="text-muted-foreground space-y-1">
                  <li>React, Vue.js, Angular</li>
                  <li>TypeScript, JavaScript</li>
                  <li>HTML5, CSS3, SASS</li>
                  <li>Tailwind CSS, Bootstrap</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Backend</h5>
                <ul className="text-muted-foreground space-y-1">
                  <li>Node.js, Express.js</li>
                  <li>Python, Django</li>
                  <li>PostgreSQL, MongoDB</li>
                  <li>REST APIs, GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="pt-6 border-t border-border">
            <button
              onClick={handleDownload}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-download"></i>
              Download Resume (PDF)
            </button>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Last updated: November 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
