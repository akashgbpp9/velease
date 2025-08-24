import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Animation utility class that replicates the original template animations
export class AnimationManager {
  private static instance: AnimationManager;

  private constructor() {
    this.init();
  }

  public static getInstance(): AnimationManager {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager();
    }
    return AnimationManager.instance;
  }

  private init() {
    // Initialize ScrollTrigger
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Set default GSAP settings
    gsap.defaults({ ease: "power2.out" });
  }

  // Replicate the exact text animations from the original template
  public initTextAnimations() {
    // Text animation style 1 (fade in up)
    this.animateTextStyle1();

    // Text animation style 2 (character by character)
    this.animateTextStyle2();

    // Text animation style 3 (3D rotation)
    this.animateTextStyle3();
  }

  // Replicate the exact image animations from the original template
  public initImageAnimations() {
    this.animateImages();
  }

  // Replicate the exact reveal animations from the original template
  public initRevealAnimations() {
    this.animateReveals();
  }

  // Replicate the exact counter animations from the original template
  public initCounterAnimations() {
    this.animateCounters();
  }

  // Text Animation Style 1: Fade in up with stagger
  private animateTextStyle1() {
    const elements = document.querySelectorAll(".text-anime-style-1");

    elements.forEach((element, index) => {
      const delayValue = index * 0.1;
      const translateXValue = "0";
      const staggerAmount = 0.05;
      const easeType = "power2.out";

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          delay: delayValue,
          ease: easeType,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }

  // Text Animation Style 2: Character by character animation (replicates text-anime-style-2)
  private animateTextStyle2() {
    const elements = document.querySelectorAll(".text-anime-style-2");

    elements.forEach((element) => {
      // Create split text
      const splitText = new SplitText(element, {
        type: "chars, words",
        charsClass: "char",
      });

      // Set initial state
      gsap.set(splitText.chars, {
        opacity: 0,
        y: 100,
        rotationX: -90,
      });

      // Animate characters
      gsap.to(splitText.chars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }

  // Text Animation Style 3: 3D rotation animation (replicates text-anime-style-3)
  private animateTextStyle3() {
    const elements = document.querySelectorAll(".text-anime-style-3");

    elements.forEach((element) => {
      // Create split text
      const splitText = new SplitText(element, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      // Set perspective
      gsap.set(element, { perspective: 400 });

      // Set initial state
      gsap.set(splitText.chars, {
        opacity: 0,
        x: 50,
        rotationY: -90,
      });

      // Animate characters
      gsap.to(splitText.chars, {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }

  // Image animations (replicates image-anime and reveal classes)
  private animateImages() {
    // Image reveal animations
    const revealImages = document.querySelectorAll(".image-anime, .reveal");

    revealImages.forEach((image) => {
      gsap.fromTo(
        image,
        {
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }

  // Reveal animations (replicates reveal class)
  private animateReveals() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
      gsap.fromTo(
        reveal,
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: reveal,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }

  // Counter animations (replicates counter class)
  private animateCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      const duration = 2;

      gsap.to(counter, {
        innerHTML: target,
        duration: duration,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }

  // WOW.js equivalent animations
  public initWowAnimations() {
    const wowElements = document.querySelectorAll(".wow");

    wowElements.forEach((element) => {
      const animationType =
        element.getAttribute("data-wow-animation") || "fadeInUp";
      const delay = element.getAttribute("data-wow-delay") || "0s";
      const duration = element.getAttribute("data-wow-duration") || "1s";

      gsap.fromTo(element, this.getInitialState(animationType), {
        ...this.getFinalState(animationType),
        duration: parseFloat(duration),
        delay: parseFloat(delay),
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }

  // Get initial animation state based on animation type
  private getInitialState(animationType: string) {
    switch (animationType) {
      case "fadeInUp":
        return { opacity: 0, y: 50 };
      case "fadeInDown":
        return { opacity: 0, y: -50 };
      case "fadeInLeft":
        return { opacity: 0, x: -50 };
      case "fadeInRight":
        return { opacity: 0, x: 50 };
      case "fadeIn":
        return { opacity: 0 };
      case "zoomIn":
        return { opacity: 0, scale: 0.5 };
      case "slideInUp":
        return { y: 100 };
      case "slideInDown":
        return { y: -100 };
      case "slideInLeft":
        return { x: -100 };
      case "slideInRight":
        return { x: 100 };
      default:
        return { opacity: 0, y: 30 };
    }
  }

  // Get final animation state based on animation type
  private getFinalState(animationType: string) {
    switch (animationType) {
      case "fadeInUp":
      case "fadeInDown":
      case "fadeInLeft":
      case "fadeInRight":
      case "fadeIn":
        return { opacity: 1, y: 0, x: 0 };
      case "zoomIn":
        return { opacity: 1, scale: 1 };
      case "slideInUp":
      case "slideInDown":
        return { y: 0 };
      case "slideInLeft":
      case "slideInRight":
        return { x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  }

  // Parallax effect (replicates parallaxie functionality)
  public initParallax() {
    const parallaxElements = document.querySelectorAll(".parallaxie");

    parallaxElements.forEach((element) => {
      gsap.to(element, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }

  // Cleanup animations
  public cleanup() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}

// Export singleton instance
export const animationManager = AnimationManager.getInstance();

// Export individual animation functions for component use
export const animateOnScroll = (
  element: HTMLElement,
  animation: string,
  delay: number = 0
) => {
  const initialState = animationManager["getInitialState"](animation);
  const finalState = animationManager["getFinalState"](animation);

  gsap.fromTo(element, initialState, {
    ...finalState,
    duration: 1,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse",
    },
  });
};

// Export animation classes for CSS
export const animationClasses = {
  wow: "wow",
  animated: "animated",
  fadeInUp: "fadeInUp",
  fadeInDown: "fadeInDown",
  fadeInLeft: "fadeInLeft",
  fadeInRight: "fadeInRight",
  fadeIn: "fadeIn",
  zoomIn: "zoomIn",
  slideInUp: "slideInUp",
  slideInDown: "slideInDown",
  slideInLeft: "slideInLeft",
  slideInRight: "slideInRight",
  textAnimeStyle1: "text-anime-style-1",
  textAnimeStyle2: "text-anime-style-2",
  textAnimeStyle3: "text-anime-style-3",
  imageAnime: "image-anime",
  reveal: "reveal",
  parallaxie: "parallaxie",
  counter: "counter",
};
