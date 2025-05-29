interface FunFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const funFacts = [
  {
    icon: "fas fa-coffee",
    title: "Coffee Addict",
    description: "I drink an average of 4 cups of coffee per day. My favorite is a double shot espresso!"
  },
  {
    icon: "fas fa-cat",
    title: "Cat Person",
    description: "I have two cats named Pixel and Debug. They're excellent code reviewers (they sit on my keyboard)."
  },
  {
    icon: "fas fa-music",
    title: "Music Producer",
    description: "In my spare time, I produce electronic music. I've released 3 albums on Spotify!"
  },
  {
    icon: "fas fa-mountain",
    title: "Adventure Seeker",
    description: "I've hiked over 50 trails in California and plan to visit all national parks in the US."
  },
  {
    icon: "fas fa-gamepad",
    title: "Retro Gamer",
    description: "I collect vintage gaming consoles. My prized possession is a working Atari 2600 from 1977."
  },
  {
    icon: "fas fa-language",
    title: "Polyglot",
    description: "I speak 4 languages: English, Spanish, Japanese, and Python (does that count?)."
  },
  {
    icon: "fas fa-book",
    title: "Bookworm",
    description: "I read 52 books last year! My favorite genres are sci-fi, fantasy, and tech biographies."
  },
  {
    icon: "fas fa-seedling",
    title: "Plant Parent",
    description: "I have 23 plants in my apartment. My fiddle leaf fig, Frank, is almost 6 feet tall!"
  }
];

export default function FunFactsModal({ isOpen, onClose }: FunFactsModalProps) {
  if (!isOpen) return null;

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
            <i className="fas fa-cat text-2xl text-primary"></i>
            <h2 className="text-2xl font-bold">Fun Facts About Me</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Fun Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className={`${fact.icon} text-xl text-primary`}></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Easter Egg Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <div className="text-center">
            <i className="fas fa-star text-3xl text-primary mb-3"></i>
            <h3 className="text-xl font-bold mb-2">Secret Achievement Unlocked!</h3>
            <p className="text-muted-foreground mb-4">
              🎉 You found the cat! You're clearly someone who pays attention to details. 
              I like that in a person (and in a potential collaborator)!
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                <i className="fas fa-trophy mr-1"></i>
                Explorer
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full">
                <i className="fas fa-eye mr-1"></i>
                Detail-Oriented
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full">
                <i className="fas fa-paw mr-1"></i>
                Cat Friend
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
