import { useEffect, useRef, useCallback } from "react";
import {
  animationManager,
  animateOnScroll,
  animationClasses,
} from "../utils/animations";

export const useAnimations = () => {
  const elementRef = useRef<HTMLElement>(null);

  const addAnimationClass = useCallback((className: string) => {
    if (elementRef.current) {
      elementRef.current.classList.add(className);
    }
  }, []);

  const removeAnimationClass = useCallback((className: string) => {
    if (elementRef.current) {
      elementRef.current.classList.remove(className);
    }
  }, []);

  const animateElement = useCallback((animation: string, delay: number = 0) => {
    if (elementRef.current) {
      animateOnScroll(elementRef.current, animation, delay);
    }
  }, []);

  return {
    elementRef,
    addAnimationClass,
    removeAnimationClass,
    animateElement,
    animationClasses,
  };
};

// Hook for scroll-triggered animations
export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(
  animation: string,
  delay: number = 0
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current) {
      animateOnScroll(elementRef.current, animation, delay);
    }
  }, [animation, delay]);

  return elementRef;
};

// Hook for counter animations
export const useCounterAnimation = <T extends HTMLElement = HTMLElement>(
  targetValue: number,
  duration: number = 2
) => {
  const counterRef = useRef<T>(null);

  useEffect(() => {
    if (counterRef.current) {
      const element = counterRef.current;

      // Add counter class for styling
      element.classList.add(animationClasses.counter);
      element.setAttribute("data-target", targetValue.toString());

      // Initialize counter animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Start counter animation
              let currentValue = 0;
              const increment = targetValue / (duration * 60); // 60fps

              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(timer);
                }
                element.textContent = Math.floor(currentValue).toString();
              }, 1000 / 60); // 60fps

              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [targetValue, duration]);

  return counterRef;
};

// Hook for parallax effect
export const useParallax = <T extends HTMLElement = HTMLElement>(
  speed: number = 0.5
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      element.classList.add(animationClasses.parallaxie);

      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        element.style.transform = `translateY(${rate}px)`;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [speed]);

  return elementRef;
};

// Hook for image reveal animations
export const useImageReveal = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      element.classList.add(animationClasses.imageAnime);

      // Add hover effect for image shine
      const handleMouseEnter = () => {
        element.style.setProperty("--shine-opacity", "1");
      };

      const handleMouseLeave = () => {
        element.style.setProperty("--shine-opacity", "0");
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return elementRef;
};

// Hook for text animations
export const useTextAnimation = <T extends HTMLElement = HTMLElement>(
  style: "style1" | "style2" | "style3" = "style1"
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;

      switch (style) {
        case "style1":
          element.classList.add(animationClasses.textAnimeStyle1);
          break;
        case "style2":
          element.classList.add(animationClasses.textAnimeStyle2);
          break;
        case "style3":
          element.classList.add(animationClasses.textAnimeStyle3);
          break;
      }
    }
  }, [style]);

  return elementRef;
};

// Hook for reveal animations
export const useReveal = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.classList.add(animationClasses.reveal);
    }
  }, []);

  return elementRef;
};
