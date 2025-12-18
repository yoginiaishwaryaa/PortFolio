import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating blobs */}
      <div 
        className="floating-shape floating-shape-1 animate-morph"
        style={{ top: '-10%', left: '-5%' }}
      />
      <div 
        className="floating-shape floating-shape-2 animate-morph"
        style={{ top: '40%', right: '-10%', animationDelay: '-3s' }}
      />
      <div 
        className="floating-shape floating-shape-3 animate-morph"
        style={{ bottom: '10%', left: '20%', animationDelay: '-5s' }}
      />
      <div 
        className="floating-shape floating-shape-4 animate-morph"
        style={{ top: '20%', left: '60%', animationDelay: '-7s' }}
      />
      <div 
        className="floating-shape floating-shape-5 animate-morph"
        style={{ bottom: '30%', right: '20%', animationDelay: '-2s' }}
      />

      {/* Geometric shapes */}
      <svg
        className="geometric-shape w-20 h-20 opacity-20"
        style={{ top: '15%', left: '10%' }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(270 60% 70%)" strokeWidth="2" />
      </svg>

      <svg
        className="geometric-shape w-16 h-16 opacity-20"
        style={{ top: '60%', right: '15%', animationDelay: '-5s' }}
        viewBox="0 0 100 100"
      >
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="hsl(160 50% 60%)" strokeWidth="2" transform="rotate(45 50 50)" />
      </svg>

      <svg
        className="geometric-shape w-24 h-24 opacity-15"
        style={{ bottom: '20%', left: '5%', animationDelay: '-10s' }}
        viewBox="0 0 100 100"
      >
        <polygon points="50,10 90,90 10,90" fill="none" stroke="hsl(320 50% 70%)" strokeWidth="2" />
      </svg>

      <svg
        className="geometric-shape w-14 h-14 opacity-20"
        style={{ top: '80%', left: '40%', animationDelay: '-15s' }}
        viewBox="0 0 100 100"
      >
        <polygon points="50,5 95,35 80,90 20,90 5,35" fill="none" stroke="hsl(200 70% 70%)" strokeWidth="2" />
      </svg>

      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-bounce-gentle"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `hsl(${[270, 160, 20, 200, 320][i % 5]} ${50 + Math.random() * 20}% ${70 + Math.random() * 15}%)`,
            opacity: 0.3 + Math.random() * 0.3,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
