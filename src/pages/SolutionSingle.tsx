import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { ContactForm } from "../components";

const SolutionSingle: React.FC = () => {
  const { id } = useParams() as {
    id:
      | "office-interiors-consultation"
      | "design-and-build-execution"
      | "furniture-as-a-service";
  };
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

  // Service data - in a real app, this would come from an API
  const serviceData = [
    {
      title: "Office Interiors Consultation",
      description:
        "Our consultation services are designed to give businesses and landlords a clear, actionable strategy for their workspaces. We go beyond aesthetics to ensure every decision — from layout to financial structure — aligns with your long-term business goals. With our expertise, clients gain clarity on how to maximize space efficiency, forecast growth, and protect their capital while securing high-quality interiors.",
      extendedDescription:
        "We focus on creating strategies that not only address immediate needs but also anticipate the future. By combining design thinking with financial insight, we make office interiors a tool for business scalability. Whether you're a company seeking to optimize a new office or a landlord aiming to attract premium tenants, our consultation ensures your space becomes a competitive advantage.",
      features: [
        "Simplify growth with smarter workspace planning",
        "Bridge design and financial strategy",
        "Transform bare shells into revenue assets",
        "Anticipate growth with scalable solutions",
        "Reshape how landlords, tenants view interiors",
        "Pioneer shift from CapEx-heavy to OpEx-smart",
      ],
      whyChoose: [
        {
          icon: "/images/icon-why-choose-1.svg",
          title: "Strategic Consultation",
          description:
            "We align workspace planning with your growth forecasts and financial structure, ensuring your office design becomes a business advantage.",
        },
        {
          icon: "/images/icon-why-choose-3.svg",
          title: "End-to-End Design & Build",
          description:
            "From concept to fit-out and furnishing, we manage the entire process under one roof, delivering plug-and-play offices on time and on budget.",
        },
        {
          icon: "/images/icon-why-choose-2.svg",
          title: "Flexible Leasing Advantage",
          description:
            "By shifting interiors from CapEx to OpEx, we keep your capital free while providing predictable monthly costs and built-in scalability.",
        },
      ],
      whyChooseDescription:
        "From bare shell to business-ready, veLease combines design excellence with financial innovation — giving you a workspace that fuels growth without draining capital.",
      faqs: [
        {
          question:
            "How does veLease differ from a traditional interiors company?",
          answer:
            "Traditional firms demand heavy upfront CapEx, often locking businesses into inflexible assets. veLease transforms interiors into an OpEx model — you pay a predictable monthly rent instead of draining capital. This preserves cash for core business priorities while still giving you a premium workspace that evolves as you grow.",
        },
        {
          question: "What is the typical process for starting a project?",
          answer:
            "We begin with a consultation to understand your culture, headcount plans, and business goals. From there, we provide test fits and 3D concepts that show how your future office will look and function. Finally, we structure a tailored lease model — covering furniture, fit-out, and ongoing support — before moving into execution.",
        },
        {
          question: "How long does it take to deliver a workspace?",
          answer:
            "Depending on the scope, we can hand over fully functional offices in as little as 6–10 weeks. Because our model integrates design, financing, and execution under one roof, timelines are shorter and you avoid the delays common in piecemeal vendor approaches.",
        },
        {
          question: "Can my existing furniture be integrated?",
          answer:
            "Yes. We often blend your current assets with leased furniture to balance cost efficiency and brand consistency. This hybrid approach lets you retain investments you value, while upgrading the rest to modern, ergonomic, and scalable solutions.",
        },
        {
          question: "What lease terms do you offer?",
          answer:
            "Our standard lock-ins are 3 or 5 years, designed to give stability while maintaining flexibility. For high-growth companies, we also create custom terms that match expansion or consolidation plans — ensuring your workspace never becomes a constraint.",
        },
        {
          question: "How do landlords benefit from veLease?",
          answer: `We help landlords convert bare shells into plug-and-play spaces. This not only accelerates occupancy but also commands higher rental yields by positioning the property as "ready-to-move-in." In effect, veLease makes buildings more marketable and competitive without landlords shouldering CapEx.`,
        },
        {
          question: "What happens if my business grows mid-lease?",
          answer:
            "Your interiors scale with you. Whether it's upgrading furniture, reconfiguring layouts, or adding new fit-outs, our model ensures your workspace keeps pace with your business. Instead of starting from scratch, you simply adapt within the same lease — saving time, money, and disruption.",
        },
      ],
    },
    {
      title: "Design & Build Execution",
      description:
        "Our design and build services are built to simplify execution for businesses and landlords alike. From initial concepts to final handover, veLease manages every stage with precision, ensuring your office is both functional and future-ready. With our turnkey approach, you avoid juggling multiple vendors — we deliver a complete, plug-and-play office under one roof.",
      extendedDescription:
        "We combine design expertise with execution efficiency, ensuring your interiors not only look world-class but are also practical and scalable. Whether it’s a 5,000 sq.ft. startup hub or a 50,000 sq.ft. enterprise campus, veLease ensures every build is optimized for long-term growth and minimal disruption.",
      features: [
        "Streamline fit-outs with one trusted partner",
        "Visualize your workspace before execution begins",
        "Deliver plug-and-play offices on time and on budget",
        "Blend design creativity with functional efficiency",
        "Infuse brand identity into every corner of the workspace",
        "Transform bare shells into high-performing environments",
      ],
      whyChoose: [
        {
          icon: "/images/icon-why-choose-1.svg",
          title: "Turnkey Delivery",
          description:
            "One trusted partner for design, fit-outs, furniture, and finishing — delivering complete plug-and-play offices under one roof.",
        },
        {
          icon: "/images/icon-why-choose-3.svg",
          title: "Branded Experiences",
          description:
            "Every workspace is tailored to reflect your company’s culture, identity, and values, blending aesthetics with functional brand storytelling.",
        },
        {
          icon: "/images/icon-why-choose-2.svg",
          title: "On-Time Assurance",
          description:
            "Our project management ensures every detail is coordinated, keeping your workspace delivery on schedule without costly compromises.",
        },
      ],
      whyChooseDescription:
        "From concept sketches to final handover, veLease provides a unified design-build service that eliminates delays, reduces cost overruns, and guarantees quality.",
      faqs: [
        {
          question: "How is veLease different from traditional contractors?",
          answer:
            "Traditional contractors focus only on building. veLease integrates design, execution, and financing under one roof, meaning you don't juggle multiple agencies or vendors. This unified approach reduces miscommunication, accelerates timelines, and ensures your budget is managed holistically—delivering consistency and cost-efficiency from start to finish.",
        },
        {
          question: "How long does a build take?",
          answer:
            "Project timelines vary with scope and complexity. Standard office builds are typically delivered in 6–12 weeks, while larger or highly customized projects may take longer due to approvals, material sourcing, or advanced design elements. Regardless of scale, we use a structured project management approach to keep you updated and minimize delays.",
        },
        {
          question: "Can you integrate my own vendors or furniture?",
          answer:
            "Yes. veLease operates on a collaborative model. If you already have preferred vendors, legacy furniture, or specialized suppliers, we can seamlessly incorporate them into the project plan. This allows you to retain continuity, reduce costs, and maintain brand familiarity while still benefiting from our design and execution expertise.",
        },
        {
          question: "Do you handle compliance and building approvals?",
          answer:
            "Absolutely. Compliance is one of our core strengths. We manage MEP (mechanical, electrical, plumbing), fire safety certifications, and all regulatory approvals required by local authorities. Our goal is to ensure your workspace isn't just beautiful but also safe, compliant, and hassle-free from a legal standpoint.",
        },
        {
          question: "What happens if my scope changes mid-project?",
          answer:
            "Business needs evolve, and our modular execution model is built for that. Whether it's expanding the floor plan, upgrading finishes, or adjusting layouts, we re-align resources and workflows without derailing your overall timelines or budget expectations. Flexibility is built into our DNA.",
        },
        {
          question: "How do you ensure quality during execution?",
          answer:
            "We set strict standards for every vendor and material partner we work with. Multiple quality checks are conducted at each stage, from structural work to finishing. Alongside this, clients receive transparent progress reports, ensuring that every element delivered meets world-class benchmarks and aligns with your brand vision.",
        },
        {
          question: "Can you handle multi-location office projects?",
          answer:
            "Yes. veLease is equipped to deliver projects across multiple cities. We standardize design guidelines, material sourcing, and quality benchmarks to ensure consistency in branding and execution—so whether it's two offices or twenty, your company enjoys the same look, feel, and delivery standards everywhere.",
        },
      ],
    },
    {
      title: "Furniture-as-a-Service (FaaS)",
      description:
        "Furniture-as-a-Service is the future of workspace leasing. Instead of blocking capital in depreciating furniture, veLease offers premium interiors as a monthly service. Businesses enjoy world-class furniture and fit-outs while keeping their capital free for expansion.",
      extendedDescription:
        "Furniture-as-a-Service is the future of workspace leasing. Instead of blocking capital in depreciating furniture, veLease offers premium interiors as a monthly service. Businesses enjoy world-class furniture and fit-outs while keeping their capital free for expansion.",
      features: [
        "Shift interiors from CapEx to OpEx with ease",
        "Enjoy premium furniture without the upfront burden",
        "Scale seating and layouts as your team grows",
        "Eliminate maintenance headaches with built-in support",
        "Keep your office modern with upgrades and swaps",
        "Choose lease terms that fit your growth journey",
      ],
      whyChoose: [
        {
          icon: "/images/icon-why-choose-1.svg",
          title: "Immediate Tax Benefits",
          description:
            "Monthly rentals are 100% deductible as an operating expense, offering faster tax relief compared to slow depreciation on owned furniture.",
        },
        {
          icon: "/images/icon-why-choose-3.svg",
          title: "Flexible Scaling",
          description:
            "Easily add, replace, or reconfigure furniture units as your headcount evolves, ensuring seamless adaptability without disrupting ongoing operations.",
        },
        {
          icon: "/images/icon-why-choose-2.svg",
          title: "Hassle-Free Ownership",
          description:
            "We retain complete ownership of the assets, so you focus on business growth while we manage upkeep and maintenance.",
        },
      ],
      whyChooseDescription:
        "veLease keeps your balance sheet asset-light while delivering premium workspaces. Our FaaS model ensures you always have the right furniture, in the right quantity, at the right time — without locking up capital.",
      faqs: [
        {
          question: "Why lease furniture instead of buying it outright?",
          answer:
            "Leasing converts CapEx into OpEx, keeping your capital free, offering faster tax benefits, and avoiding depreciation on owned assets.",
        },
        {
          question: "What's included in the monthly rental fee?",
          answer:
            "Monthly rent covers premium furniture, upgrades, swaps, and maintenance services, ensuring predictable costs without unexpected capital outflows.",
        },
        {
          question: "Can I upgrade or replace furniture mid-lease?",
          answer:
            "Yes. Our model allows easy upgrades or reconfigurations anytime, helping your workspace adapt as your business grows.",
        },
        {
          question: "What happens at the end of a lease term?",
          answer:
            "You can renew the agreement, upgrade to new furniture packages, or exit without residual depreciation burdens on your balance sheet.",
        },
        {
          question: "How does veLease manage furniture maintenance?",
          answer:
            "We handle repairs, replacements, and ongoing upkeep, ensuring your workspace remains functional and modern without downtime or added expense.",
        },
        {
          question: "Is Furniture-as-a-Service suitable for landlords?",
          answer:
            "Absolutely. Landlords can make spaces more attractive by offering plug-and-play interiors, boosting occupancy rates and rental yield potential.",
        },
        {
          question: "How do tenants benefit financially from leasing?",
          answer:
            "Tenants preserve capital, access immediate tax deductions, enjoy scalability, and avoid heavy upfront expenses tied to traditional furniture purchases.",
        },
      ],
    },
  ];

  const servicesSidebar = [
    {
      title: "Consultation Services",
      serviceCategories: [
        "Workspace Strategy",
        "Space Planning & Test Fits",
        "Growth Forecasting",
        "Financial Structuring",
        "Landlord Advisory",
      ],
      serviceCategoriesDescription: [
        "Align interiors with business objectives, brand identity, and employee productivity.",
        "Visualize layouts through test fits, ensuring every square foot is optimized.",
        "Plan ahead with scenarios that match headcount projections and evolving workflows.",
        "Evaluate CapEx vs. OpEx models, lock-in periods, and leasing options to preserve liquidity.",
        "Enhance bare-shell spaces with tailored upgrades that increase marketability and rental yield.",
      ],
    },
    {
      title: "Execution Services",
      serviceCategories: [
        "Concept & Visualization",
        "Turnkey Fit-Outs",
        "Furniture & Ergonomics",
        "Brand Integration",
        "Project Management",
      ],
      serviceCategoriesDescription: [
        "Bring ideas to life with mood boards, 3D renderings, and detailed layouts before the build begins.",
        "From flooring and partitions to HVAC, lighting, and cabling — we manage every layer of your interiors.",
        "Delivering workstations, meeting rooms, and breakout zones tailored for comfort and productivity.",
        "Infusing your identity into the space through finishes, color schemes, and branded elements.",
        "Coordinating vendors, contractors, budgets, and timelines to ensure on-time, on-budget delivery.",
      ],
    },
    {
      title: "FaaS Services",
      serviceCategories: [
        "Workspace Furniture Leasing",
        "Upgrades & Swaps",
        "Maintenance & Support",
        "Custom Packages",
        "Scalable Lock-ins",
      ],
      serviceCategoriesDescription: [
        "Workstations, seating, conference tables, and storage on flexible monthly rentals.",
        "Replace, expand, or reconfigure furniture as your team evolves — no heavy reinvestment required.",
        "All upkeep, repairs, and replacements included in your lease for hassle-free operations.",
        "Tailored leasing bundles for startups, SMEs, or enterprises.",
        "Choose 3-year, 5-year, or custom terms based on your growth trajectory.",
      ],
    },
  ];
  // Map string IDs to array indices
  const idToIndexMap: Record<string, number> = {
    "office-interiors-consultation": 0,
    "design-and-build-execution": 1,
    "furniture-as-a-service": 2,
  };

  const servicesImage = [
    "/images/oic-solutions-banner.jpg",
    "/images/dbe-banner-image.jpg",
    "/images/faas-banner-img.jpg",
  ];

  const servicesHeroBG = [
    "/images/oic-solutions-bkg.jpg",
    "/images/dbe-bkg-image.jpg",
    "/images/faas-bkg-img.jpg",
  ];

  const serviceEntryImg = [
    "/images/service-entry-img.jpg",
    "/images/dbe-secondary-image.jpg",
    "/images/faas-secondary-img.jpg",
  ];

  const currentIndex = idToIndexMap[id] || 0;
  const currentService = serviceData[currentIndex];

  // Custom SEO data for each solution page
  const seoData = {
    "office-interiors-consultation": {
      title:
        "Office Interiors Consultation in Pune | Workspace Strategy by veLease",
      description:
        "Looking for office interiors consultation in Pune? veLease helps with workspace strategy, space planning, and financial structuring to fuel business growth.",
      keywords:
        "office interiors consultation, workspace strategy, space planning, financial structuring, Pune, veLease, office design consultation",
    },
    "design-and-build-execution": {
      title:
        "Office Design & Build Execution Pune | Turnkey Fit-Outs by veLease",
      description:
        "Transform bare shells into plug-and-play offices. veLease offers end-to-end design and build execution in Pune — interiors, furniture, branding, and handover.",
      keywords:
        "office design build execution, turnkey fit-outs, office interiors, furniture, branding, Pune, veLease, design build",
    },
    "furniture-as-a-service": {
      title:
        "Furniture-as-a-Service in Pune | Flexible Office Leasing | veLease",
      description:
        "Lease premium office furniture in Pune with veLease. Upgrades, swaps, and maintenance included — flexible lock-ins that convert CapEx into predictable OpEx.",
      keywords:
        "furniture as a service, office furniture leasing, flexible leasing, CapEx to OpEx, Pune, veLease, office furniture",
    },
  };

  const currentSeo = seoData[id as keyof typeof seoData] || {
    title: `${currentService?.title} | Office Interior Design in Pune | veLease`,
    description:
      currentService?.description ||
      "Professional office interior design services in Pune with flexible leasing solutions by veLease.",
    keywords: `${currentService?.title}, office interior design, Pune, veLease, workspace design, flexible leasing`,
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonical={`/solutions/${id}`}
      />
      {/* Page Header Start */}
      <div
        className="page-header parallaxie"
        style={{
          backgroundImage: `url(${servicesHeroBG[currentIndex]})`,
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
                <motion.h1
                  className="text-anime-style-2"
                  data-cursor="-opaque"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {serviceData[currentIndex].title}
                </motion.h1>
                <motion.nav
                  className="wow fadeInUp"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/solutions">solutions</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {serviceData[currentIndex].title}
                    </li>
                  </ol>
                </motion.nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Service Single Start */}
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Service Sidebar Start */}
              <div className="service-sidebar">
                {/* Service Category List Start */}
                <motion.div
                  className="service-catagery-list wow fadeInUp"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3>{servicesSidebar[currentIndex].title}</h3>
                  <ul>
                    {servicesSidebar[currentIndex].serviceCategories.map(
                      (category, index) => (
                        <li key={index}>
                          <a href="#">{category}</a>
                          <p
                            className=""
                            style={{ textTransform: "none", fontSize: "14px" }}
                          >
                            {
                              servicesSidebar[currentIndex]
                                .serviceCategoriesDescription[index]
                            }
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </motion.div>
                {/* Service Category List End */}

                {/* Sidebar CTA Box Start */}
                <motion.div
                  className="sidebar-cta-box wow fadeInUp"
                  data-wow-delay="0.2s"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Sidebar CTA Image Start */}
                  <div className="sidebar-cta-image">
                    <div className="image-anime">
                      <img src="/images/sidebar-cta-img.jpg" alt="" />
                    </div>
                  </div>
                  {/* Sidebar CTA Image End */}

                  {/* Sidebar CTA Body Start */}
                  <div className="sidebar-cta-Body">
                    {/* Sidebar CTA Content Start */}
                    <div className="sidebar-cta-content">
                      <h3>Still Have Questions?</h3>
                      <p>Feel free to call or drop us an email!</p>
                    </div>
                    {/* Sidebar CTA Content End */}

                    {/* Sidebar CTA Contact Start */}
                    <div className="sidebar-cta-contact">
                      {/* Sidebar CTA Contact Item Start */}
                      <div className="sidebar-cta-contact-item">
                        <div className="icon-box">
                          <img src="/images/icon-phone.svg" alt="" />
                        </div>
                        <div className="cta-contact-item-content">
                          <p>
                            <a href="tel:+919890907614">+91 989 090 7614</a>
                          </p>
                        </div>
                      </div>
                      {/* Sidebar CTA Contact Item Start */}

                      {/* Sidebar CTA Contact Item Start */}
                      <div className="sidebar-cta-contact-item">
                        <div className="icon-box">
                          <img src="/images/icon-mail.svg" alt="" />
                        </div>
                        <div className="cta-contact-item-content">
                          <p>
                            <a href="mailto:sales@velease.com">
                              sales@velease.com
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* Sidebar CTA Contact Item Start */}
                    </div>
                    {/* Sidebar CTA Contact End */}
                  </div>
                  {/* Sidebar CTA Body End */}
                </motion.div>
                {/* Sidebar CTA Box End */}
              </div>
              {/* Service Sidebar End */}
            </div>

            <div className="col-lg-8">
              {/* Service Single Content Start */}
              <div className="service-single-content">
                {/* Service Feature Image Start */}
                <motion.div
                  className="service-feature-image"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <figure className="image-anime reveal">
                    <img src={servicesImage[currentIndex]} alt="" />
                  </figure>
                </motion.div>
                {/* Service Feature Image End */}

                {/* Service Entry Start */}
                <div className="service-entry">
                  <motion.p
                    className="wow fadeInUp"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {serviceData[currentIndex].description}
                  </motion.p>

                  <motion.p
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {serviceData[currentIndex].extendedDescription}
                  </motion.p>

                  {/* Service Entry List Image Start */}
                  <div className="service-entry-list-image">
                    {/* Service Entry Image Start */}
                    <div className="service-entry-image">
                      <figure className="image-anime reveal">
                        <img src={serviceEntryImg[currentIndex]} alt="" />
                      </figure>
                    </div>
                    {/* Service Entry Image End */}

                    {/* Service Entry List Start */}
                    <motion.div
                      className="service-entry-list wow fadeInUp"
                      data-wow-delay="0.6s"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <ul>
                        {serviceData[currentIndex].features.map(
                          (feature, index) => (
                            <li key={index}>{feature}</li>
                          )
                        )}
                      </ul>
                    </motion.div>
                    {/* Service Entry List End */}
                  </div>
                  {/* Service Entry List Image End */}
                </div>
                {/* Service Entry End */}

                {/* Why Choose Content Start */}
                <div className="why-choose-content service-single-why-choose">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <motion.h3
                      className="wow fadeInUp"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      why choose us
                    </motion.h3>
                    <motion.h2
                      className="text-anime-style-2"
                      data-cursor="-opaque"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      A smarter look at how <span>we work.</span>
                    </motion.h2>
                    <motion.p
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {serviceData[currentIndex].whyChooseDescription}
                    </motion.p>
                  </div>
                  {/* Section Title End */}

                  {/* Why Choose Item List Start */}
                  <div className="why-choose-item-list">
                    {serviceData[currentIndex].whyChoose.map((item, index) => (
                      <motion.div
                        key={index}
                        className="why-choose-item wow fadeInUp"
                        data-wow-delay={`${0.4 + index * 0.2}s`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.4 + index * 0.2,
                        }}
                      >
                        {/* Icon Box Start */}
                        <div className="icon-box">
                          <img src={item.icon} alt="" />
                        </div>
                        {/* Icon Box End */}

                        {/* Why Choose Item Content Start */}
                        <div className="why-choose-item-content">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                        {/* Why Choose Item Content End */}
                      </motion.div>
                    ))}
                  </div>
                  {/* Why Choose Item List End */}
                </div>
                {/* Why Choose Content End */}

                {/* Service Single Faq Start */}
                <div className="service-single-faq">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <motion.h3
                      className="wow fadeInUp"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Frequently Asked Questions{" "}
                      <span style={{ textTransform: "none" }}>(FAQs)</span>
                    </motion.h3>
                    <motion.h2
                      className="text-anime-style-2"
                      data-cursor="-opaque"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Your questions, answered <span>with clarity.</span>
                    </motion.h2>
                    <motion.p
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Our team ensures every step — from consultation to
                      handover — is transparent, predictable, and aligned with
                      your business goals.
                    </motion.p>
                  </div>
                  {/* Section Title End */}

                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion" id="accordion">
                    {serviceData[currentIndex].faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="accordion-item wow fadeInUp"
                        data-wow-delay={`${index * 0.2}s`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <h2
                          className="accordion-header"
                          id={`heading${index + 1}`}
                        >
                          <button
                            className={`accordion-button ${
                              index === 0 ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index + 1}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`collapse${index + 1}`}
                          >
                            <span>{index + 1}.</span> {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index + 1}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          aria-labelledby={`heading${index + 1}`}
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* FAQ Accordion End */}
                </div>
                {/* Service Single Faq End */}
              </div>
              {/* Service Single Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Service Single End */}
      <ContactForm />
    </>
  );
};

export default SolutionSingle;
