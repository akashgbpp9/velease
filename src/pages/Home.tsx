import React, { useEffect, useRef } from "react";
import {
  Hero,
  AboutUs,
  WhyChooseUs,
  Services,
  HowWeWork,
  Skills,
  Testimonials,
  ContactForm,
} from "../components";
import { Advantages } from "../components/Advantages";
import { FaqSection } from "../components/FaqSection";
import SEO from "../components/SEO";

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
      <SEO
        title="Office Interior Design in Pune | Flexible Leasing by veLease"
        description="Discover modern office interior design in Pune with veLease. We transform bare shells into plug-and-play workspaces with flexible leasing and no upfront cost."
        keywords="office interior design, Pune, flexible leasing, workspace design, office furniture, veLease, plug-and-play office, modern office interiors, office fit-out, furniture as a service"
        canonical="/"
      />
      <Hero />
      <AboutUs imageRefs={imageRefs} counterRefs={counterRefs} />
      <Services />
      <WhyChooseUs imageRefs={imageRefs} />
      <Advantages imageRefs={imageRefs} />
      <Skills imageRefs={imageRefs} />
      <HowWeWork imageRefs={imageRefs} />
      <Testimonials imageRefs={imageRefs} counterRefs={counterRefs} />
      <FaqSection imageRefs={imageRefs} />
      <ContactForm />
    </>
  );
};

export default Home;
