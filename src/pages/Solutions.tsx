import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Palette,
  Home,
  Building,
  Wrench,
  Users,
  Lightbulb,
} from "lucide-react";
import WhyChooseUs from "../components/WhyChooseUs";
import { ContactForm, HowWeWork, OurEdge } from "../components";
import SEO from "../components/SEO";

const Services: React.FC = () => {
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

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
    <div className="services-page pt-20">
      <SEO
        title="Office Interior Solutions in Pune | veLease Services"
        description="Explore veLease's comprehensive office interior solutions in Pune. From consultation and design to furniture-as-a-service, we provide complete workspace transformation services."
        keywords="office interior solutions, Pune, workspace consultation, design and build, furniture as a service, office fit-out, workspace transformation"
        canonical="/solutions"
      />
      {/* Page Header */}
      <div
        className="page-header parallaxie"
        style={{
          backgroundImage: "url(/images/solution-hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center -0.629297px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Solutions
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="./">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      solutions
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="services-grid py-20 bg-white">
        <div className="container mx-auto px-4 py-5">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                {/* Service Image Start */}
                <div className="service-image">
                  <a
                    href="/solutions/office-interiors-consultation"
                    data-cursor-text="View"
                  >
                    <figure>
                      <img
                        src="images/service-1.jpg"
                        alt="Workspace Strategy & Consultation"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}

                {/* Service Button Start */}
                <div className="service-btn">
                  <a href="/solutions/office-interiors-consultation">
                    <img src="/images/arrow-white.svg" alt="View Service" />
                  </a>
                </div>
                {/* Service Button End */}

                {/* Service Content Start */}
                <div className="service-content">
                  <h3>
                    <a href="/solutions/office-interiors-consultation">
                      Office Interiors Consultation
                    </a>
                  </h3>
                  <p>
                    We design offices aligned to business goals, offering smart
                    space planning and financial structuring strategies.
                  </p>
                </div>
                {/* Service Content End */}
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                {/* Service Image Start */}
                <div className="service-image">
                  <a
                    href="/solutions/design-and-build-execution"
                    data-cursor-text="View"
                  >
                    <figure>
                      <img
                        src="images/service-2.jpg"
                        alt="Design & Build Execution"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}

                {/* Service Button Start */}
                <div className="service-btn">
                  <a href="/solutions/design-and-build-execution">
                    <img src="/images/arrow-white.svg" alt="View Service" />
                  </a>
                </div>
                {/* Service Button End */}

                {/* Service Content Start */}
                <div className="service-content">
                  <h3>
                    <a href="/solutions/design-and-build-execution">
                      Design & Build Execution
                    </a>
                  </h3>
                  <p>
                    From design to fit-out and furnishing, we handle it
                    all—delivering a seamless, ready-to-move-in workspace.
                  </p>
                </div>
                {/* Service Content End */}
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item">
                {/* Service Image Start */}
                <div className="service-image">
                  <a
                    href="/solutions/furniture-as-a-service"
                    data-cursor-text="View"
                  >
                    <figure>
                      <img
                        src="images/service-3.jpg"
                        alt="Furniture-as-a-Service (FaaS)"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </a>
                </div>
                {/* Service Image End */}

                {/* Service Button Start */}
                <div className="service-btn">
                  <a href="/solutions/furniture-as-a-service">
                    <img src="/images/arrow-white.svg" alt="View Service" />
                  </a>
                </div>
                {/* Service Button End */}

                {/* Service Content Start */}
                <div className="service-content">
                  <h3>
                    <a href="/solutions/furniture-as-a-service">
                      Furniture-as-a-Service (FaaS)
                    </a>
                  </h3>
                  <p>
                    Lease premium furniture & interiors—no upfront cost. Monthly
                    rent covers upgrades, swaps, and hassle-free maintenance.
                  </p>
                </div>
                {/* Service Content End */}
              </div>
              {/* Service Item End */}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <WhyChooseUs imageRefs={imageRefs} />
      <HowWeWork imageRefs={imageRefs} />
      <OurEdge />
      {/* CTA Section */}
      <ContactForm />
    </div>
  );
};

export default Services;
