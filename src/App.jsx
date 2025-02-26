import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center px-4">
      {/* Main content container */}
      <div 
        className={`transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Quote container */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-slate-800 tracking-wide">
            "Sapere aude"
          </h1>
          
          {/* Translation and attribution */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-slate-600 font-light italic mb-2">
              Dare to know
            </p>
            <p className="text-base md:text-lg text-slate-500">
              — Immanuel Kant, German Philosopher
            </p>
          </div>
        </div>
      </div>

      {/* Bottom attribution */}
      <div className="absolute bottom-8 text-sm text-slate-400">
        <p>The motto of enlightenment</p>
      </div>
    </div>
  );
}

export default App;