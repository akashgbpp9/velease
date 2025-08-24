import React, { useEffect, useRef } from "react";
import {
  Hero,
  AboutUs,
  WhyChooseUs,
  Services,
  IntroVideo,
  Projects,
  HowWeWork,
  Skills,
  Testimonials,
  Blog,
} from "../components";

const Home: React.FC = () => {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLSpanElement;
            const finalValue = parseInt(
              target.textContent?.replace(/\D/g, "") || "0"
            );
            let currentValue = 0;
            const increment = finalValue / 50;

            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= finalValue) {
                target.textContent =
                  finalValue + (target.textContent?.includes("+") ? "+" : "");
                clearInterval(timer);
              } else {
                target.textContent =
                  Math.floor(currentValue) +
                  (target.textContent?.includes("+") ? "+" : "");
              }
            }, 30);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Image reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Skills progress animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillbar = entry.target.closest(".skillbar") as HTMLElement;
            if (skillbar) {
              const percent = skillbar.getAttribute("data-percent");
              const countBar = skillbar.querySelector(
                ".count-bar"
              ) as HTMLElement;
              if (percent && countBar) {
                countBar.style.width = percent;
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillbars = document.querySelectorAll(".skillbar");
    skillbars.forEach((skillbar) => observer.observe(skillbar));

    return () => observer.disconnect();
  }, []);

  // WOW animation system for fadeInUp effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const delay = element.getAttribute("data-wow-delay");

            if (delay) {
              const delayMs = parseFloat(delay) * 1000;
              setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
              }, delayMs);
            } else {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const wowElements = document.querySelectorAll(".wow.fadeInUp");
    wowElements.forEach((element) => {
      const el = element as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <AboutUs imageRefs={imageRefs} counterRefs={counterRefs} />
      <WhyChooseUs imageRefs={imageRefs} />
      <Services />
      <IntroVideo />
      <Projects imageRefs={imageRefs} />
      <HowWeWork imageRefs={imageRefs} />
      <Skills imageRefs={imageRefs} />
      <Testimonials imageRefs={imageRefs} counterRefs={counterRefs} />
      <Blog imageRefs={imageRefs} />
    </>
  );
};

export default Home;
