'use client';
import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (scrolled / height) * 100 : 0;
      setProgress(value);
    };
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-transparent">
      <div 
        className="h-full bg-red-light transition-all duration-150 ease-out rounded-r-full" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}
