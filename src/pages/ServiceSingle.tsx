import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceSingle: React.FC = () => {
  const { id } = useParams();
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

  // Service data - in a real app, this would come from an API
  const serviceData = {
    title: "Residential Design",
    description:
      "Our consultation services are designed to give businesses and landlords a clear, actionable strategy for their workspaces. We go beyond aesthetics to ensure every decision — from layout to financial structure — aligns with your long-term business goals. With our expertise, clients gain clarity on how to maximize space efficiency, forecast growth, and protect their capital while securing high-quality interiors.",
    extendedDescription:
      "We focus on creating strategies that not only address immediate needs but also anticipate the future. By combining design thinking with financial insight, we make office interiors a tool for business scalability. Whether you’re a company seeking to optimize a new office or a landlord aiming to attract premium tenants, our consultation ensures your space becomes a competitive advantage.",
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
    faqs: [
      {
        question:
          "How does veLease differ from a traditional interiors company?",
        answer:
          "Traditional firms charge heavy upfront CapEx. veLease converts interiors into OpEx, so you pay predictable monthly rent and preserve capital.",
      },
      {
        question: "What is the typical process for starting a project?",
        answer:
          "We begin with a consultation to understand your business, then provide test fits, 3D concepts, and a tailored lease model before execution.",
      },
      {
        question: "How long does it take to deliver a workspace?",
        answer:
          "Depending on scope, we hand over fully functional offices in as little as 6–10 weeks.",
      },
      {
        question: "Can my existing furniture be integrated?",
        answer:
          "Yes. We can blend your current assets with leased furniture to balance cost efficiency and brand consistency.",
      },
      {
        question: "What lease terms do you offer?",
        answer:
          "Standard lock-ins are 3 or 5 years, but we can create custom terms depending on your growth plans.",
      },
      {
        question: "How do landlords benefit from veLease?",
        answer:
          "Absolutely. We help landlords convert bare shells into plug-and-play spaces, increasing marketability and rental yield.",
      },
      {
        question: "What happens if my business grows mid-lease?",
        answer:
          "Your interiors scale with you. Furniture upgrades, reconfiguration, or additional fit-outs are all built into our model.",
      },
    ],
  };

  const serviceCategories = [
    "Workspace Strategy",
    "Space Planning & Test Fits",
    "Growth Forecasting",
    "Financial Structuring",
    "Landlord Advisory",
  ];

  const serviceCategoriesDescription = [
    "Align interiors with business objectives, brand identity, and employee productivity.",
    "Visualize layouts through test fits, ensuring every square foot is optimized.",
    "Plan ahead with scenarios that match headcount projections and evolving workflows.",
    "Evaluate CapEx vs. OpEx models, lock-in periods, and leasing options to preserve liquidity.",
    "Enhance bare-shell spaces with tailored upgrades that increase marketability and rental yield.",
  ];

  return (
    <>
      {/* Page Header Start */}
      <div
        className="page-header parallaxie"
        style={{
          backgroundImage:
            "url(https://html.awaikenthemes.com/inspaire/images/page-header-bg.jpg)",
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
                  Office Interiors Consultation
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
                      <Link to="/services">services</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Office Interiors Consultation
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
                  <h3>Consultation Services</h3>
                  <ul>
                    {serviceCategories.map((category, index) => (
                      <li key={index}>
                        <a href="#">{category}</a>
                        <p className="">
                          {serviceCategoriesDescription[index]}
                        </p>
                      </li>
                    ))}
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
                      <h3>how can we help</h3>
                      <p>
                        If you need any helps, please feel free to contact us.
                      </p>
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
                          <p>+91 989 090 7614</p>
                        </div>
                      </div>
                      {/* Sidebar CTA Contact Item Start */}

                      {/* Sidebar CTA Contact Item Start */}
                      <div className="sidebar-cta-contact-item">
                        <div className="icon-box">
                          <img src="/images/icon-mail.svg" alt="" />
                        </div>
                        <div className="cta-contact-item-content">
                          <p>sales@velease.com</p>
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
                    <img src="/images/service-1.jpg" alt="" />
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
                    {serviceData.description}
                  </motion.p>

                  <motion.p
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {serviceData.extendedDescription}
                  </motion.p>

                  {/* Service Entry List Image Start */}
                  <div className="service-entry-list-image">
                    {/* Service Entry Image Start */}
                    <div className="service-entry-image">
                      <figure className="image-anime reveal">
                        <img src="/images/service-entry-img.jpg" alt="" />
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
                        {serviceData.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
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
                      why choose usz
                    </motion.h3>
                    <motion.h2
                      className="text-anime-style-2"
                      data-cursor="-opaque"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      A behind the scenes look at <span>our agency</span>
                    </motion.h2>
                    <motion.p
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      From concept to completion, discover how we bring your
                      vision to life with innovation, collaboration, and expert
                      craftsmanship.
                    </motion.p>
                  </div>
                  {/* Section Title End */}

                  {/* Why Choose Item List Start */}
                  <div className="why-choose-item-list">
                    {serviceData.whyChoose.map((item, index) => (
                      <motion.div
                        key={index}
                        className="why-choose-item wow fadeInUp"
                        data-wow-delay={`${0.4 + index * 0.2}s`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
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
                      asked question
                    </motion.h3>
                    <motion.h2
                      className="text-anime-style-2"
                      data-cursor="-opaque"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Have your any question look <span>here now</span>
                    </motion.h2>
                    <motion.p
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Nostra turma dedicata consilium arctius operatur ut
                      visionem tuam intelligat et eam ad vitam adducat cum magna
                      cura in singula
                    </motion.p>
                  </div>
                  {/* Section Title End */}

                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion" id="accordion">
                    {serviceData.faqs.map((faq, index) => (
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
    </>
  );
};

export default ServiceSingle;
