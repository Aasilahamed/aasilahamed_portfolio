interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create downloadable resume content
    const resumeContent = `
AASIL AHAMED S
B.Sc. Artificial Intelligence and Machine Learning Student | Full-Stack Developer | Event Organizer

Contact Information:
Phone: +91 9843743705
Email: saasilahamed123@gmail.com
Location: Coimbatore, Tamil Nadu
LinkedIn: linkedin.com/in/s-aasil-ahamed

Career Objective:
A passionate B.Sc. Artificial Intelligence and Machine Learning student with a strong interest in full-stack development and a knack for organizing events and building connections. I aim to contribute to innovative tech teams where I can apply and grow my development skills, take initiative, and collaborate effectively—while also creating meaningful experiences through community engagement and leadership.

Technical Skills:
Python | JavaScript | HTML | CSS | React.js | Node.js | MongoDB | MySQL | Tailwind CSS | Git | GitHub | Figma | Canva | UI/UX Design | Firebase | N8N

Education:
B.Sc. Artificial Intelligence and Machine Learning
Rathinam College of Arts and Science | 2023 - 2026 | CGPA: 7.94

HSC | Nirmala Matha Convent Hr Sec School | 2022 | 74.6%
SSLC | Nirmala Matha Convent Hr Sec School | 2020 | 91.4%

Internship:
Web Scraping Intern | Data Pattern | Coimbatore | 2023
- Completed a 2-month internship focused on web scraping and data collection
- Developed Python scripts using libraries like BeautifulSoup and Requests to extract data from websites

Projects:
1. AI-Powered FIR Assistant
   - An AI-based chatbot system that helps users file First Information Reports using natural language processing
   - Integrated voice-to-text and real-time response capabilities for ease of use

2. Anzoro – Professional Networking Platform
   - An NFC-powered networking platform that lets users create digital profiles and order custom-designed NFC cards
   - Includes React-based frontend, dynamic dashboard, and profile builder workflow

3. Cognitive Firewall: AI-Based Scam & Manipulation Detection
   - Cognitive Firewall is a browser-based, real-time text analysis tool designed to identify emotionally manipulative and scam-related messages

Certifications:
- Network Topologies & Technologies – Infosys Springboard
- Basics of Python – Infosys Springboard  
- Soft Skills for IT – Great Learning Academy
- Introduction to Web Development – LeadPro Infotech

Achievements:
- Finalist in UNESCO Ocean Literacy Program
- Lead Organizer of "Hack Beyond Limits!" – a National-Level 24-Hour Hackathon hosted at Rathinam College
- Conducted tech workshops on UI/UX and Figma basics for the student community
- Volunteered at the Mega Placement Opportunity organized by Tamil Nadu Government with Rathinam College

Soft Skills:
Effective Communication | Problem Solving | Time Management | Leadership | Event Management | Public Speaking | Team Collaboration

Hobbies:
Exploring | UI Designing | Photography | Cooking

Languages:
English/Tamil - Speak, Read, Write
Malayalam - Speak
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Aasil_Ahamed_Resume.txt';
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
      <div className="relative bg-white/10 backdrop-blur-md text-white rounded-xl p-6 max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-file-pdf text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Resume</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Resume Preview */}
        <div className="space-y-6">
          {/* Header Section */}
          <div className="text-center border-b border-border pb-6">
            <h3 className="text-2xl font-bold mb-2">AASIL AHAMED S</h3>
            <p className="text-lg text-primary mb-2">B.Sc. AI & ML Student | Full-Stack Developer | Event Organizer</p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span><i className="fas fa-envelope mr-1"></i> saasilahamed123@gmail.com</span>
              <span><i className="fas fa-phone mr-1"></i> +91 9843743705</span>
              <span><i className="fas fa-map-marker-alt mr-1"></i> Coimbatore, Tamil Nadu</span>
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
