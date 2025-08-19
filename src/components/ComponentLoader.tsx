import React, { useState, useEffect } from 'react';

interface ComponentLoaderProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  showSkeleton?: boolean;
}

const ComponentLoader: React.FC<ComponentLoaderProps> = ({
  children,
  delay = 0,
  className = '',
  showSkeleton = true
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading && showSkeleton) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-gray-200 dark:bg-gray-700 rounded h-8 mb-4"></div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 mb-2"></div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 mb-2"></div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-3/4"></div>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}>
      {children}
    </div>
  );
};

export default ComponentLoader;
