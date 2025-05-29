interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, icon: "fab fa-react", category: "Frontend" },
  { name: "TypeScript", level: 90, icon: "fas fa-code", category: "Frontend" },
  { name: "Vue.js", level: 85, icon: "fab fa-vuejs", category: "Frontend" },
  { name: "HTML/CSS", level: 95, icon: "fab fa-html5", category: "Frontend" },
  { name: "Tailwind CSS", level: 90, icon: "fas fa-palette", category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 90, icon: "fab fa-node-js", category: "Backend" },
  { name: "Express.js", level: 85, icon: "fas fa-server", category: "Backend" },
  { name: "Python", level: 80, icon: "fab fa-python", category: "Backend" },
  { name: "PostgreSQL", level: 85, icon: "fas fa-database", category: "Backend" },
  { name: "MongoDB", level: 80, icon: "fas fa-leaf", category: "Backend" },
  
  // Cloud & DevOps
  { name: "AWS", level: 85, icon: "fab fa-aws", category: "Cloud" },
  { name: "Docker", level: 80, icon: "fab fa-docker", category: "Cloud" },
  { name: "Kubernetes", level: 75, icon: "fas fa-dharmachakra", category: "Cloud" },
  { name: "Git", level: 95, icon: "fab fa-git-alt", category: "Tools" },
  { name: "CI/CD", level: 80, icon: "fas fa-sync", category: "Cloud" },
  
  // Tools
  { name: "VS Code", level: 95, icon: "fas fa-code", category: "Tools" },
  { name: "Figma", level: 75, icon: "fab fa-figma", category: "Tools" },
  { name: "Postman", level: 85, icon: "fas fa-paper-plane", category: "Tools" }
];

const categories = ["Frontend", "Backend", "Cloud", "Tools"];

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  if (!isOpen) return null;

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card text-card-foreground rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-border shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-book text-2xl text-primary"></i>
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category} className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {category === "Frontend" && <i className="fas fa-desktop text-primary"></i>}
                {category === "Backend" && <i className="fas fa-server text-primary"></i>}
                {category === "Cloud" && <i className="fas fa-cloud text-primary"></i>}
                {category === "Tools" && <i className="fas fa-tools text-primary"></i>}
                {category}
              </h3>
              
              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <i className={`${skill.icon} text-primary`}></i>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted-foreground/20 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill Legend */}
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-3">Proficiency Levels</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Expert (90-100%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Advanced (80-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Intermediate (70-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Beginner (60-69%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
