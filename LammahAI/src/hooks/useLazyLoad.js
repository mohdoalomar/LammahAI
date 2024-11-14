// src/hooks/useLazyLoad.js
import { useState, useEffect, useRef } from 'react';

const useLazyLoad = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      defaultOptions
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        observer.disconnect();
      }
    };
  }, [defaultOptions.threshold, defaultOptions.rootMargin]);

  return [elementRef, isVisible];
};

export default useLazyLoad;