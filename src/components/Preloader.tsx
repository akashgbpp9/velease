import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time like the original template
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="loading-container text-center">
        <div className="loading w-16 h-16 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
        <div id="loading-icon" className="mb-4">
          <img
            src="/images/loader.svg"
            alt="Loading"
            className="w-16 h-16 mx-auto"
          />
        </div>
        <div className="text-2xl font-bold text-primary">Inspaire</div>
      </div>
    </div>
  );
};

export default Preloader;
