import React, { useEffect, useRef } from "react";
import {
  PageHeader,
  AboutUsSection,
  VisionMissionSection,
  OurEdge,
  TeamSection,
  AboutFAQSection,
  ClientsSection,
  Testimonials,
  HowWeWork,
} from "../components";

const About: React.FC = () => {
  const breadcrumbs = [
    { label: "home", href: "/" },
    { label: "about us", active: true },
  ];

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
  return (
    <div className="about-page">
      {/* Page Header */}
      <PageHeader
        title="About us"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/page-header-bg.jpg"
      />

      {/* About Us Section */}
      <AboutUsSection imageRefs={imageRefs} counterRefs={counterRefs} />

      {/* Vision Mission Section */}
      <VisionMissionSection imageRefs={imageRefs} />

      {/* Best Selling Section */}
      <OurEdge />

      {/* Testimonials Section */}
      <Testimonials imageRefs={imageRefs} counterRefs={counterRefs} />

      {/* Team Section */}
      <TeamSection />

      {/* How We Work Section */}
      <HowWeWork imageRefs={imageRefs} />

      {/* About FAQ Section */}
      <AboutFAQSection imageRefs={imageRefs} />

      {/* Clients Section */}
      <ClientsSection />
    </div>
  );
};

export default About;
