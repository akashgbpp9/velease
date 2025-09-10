import React from "react";
import { motion } from "framer-motion";

interface CompanyTimelineProps {
  imageRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const CompanyTimeline: React.FC<CompanyTimelineProps> = ({ imageRefs }) => {
  const timelineData = [
    {
      year: "2014",
      title: "Entering CRE Consulting",
      description:
        "Began advising businesses in Mumbai on commercial real estate, establishing credibility in office space consulting.",
    },
    {
      year: "2016",
      title: "VLMS Global Established",
      description:
        "Launched VLMS, a sales enablement services firm, building operational expertise across multiple industries.",
    },
    {
      year: "2018",
      title: "Verified Market Research Founded",
      description:
        "Expanded into consulting with VMR, delivering market insights across industries and geographies.",
    },
    {
      year: "2020",
      title: "Expansion into Pune",
      description:
        "Started CRE consulting in Pune while managing 200,000 sq.ft. of office space.",
    },
    {
      year: "2021",
      title: "Diversification & Partnerships",
      description:
        "VLMS expanded into healthcare services; forged IT consulting partnerships with startups, MSMEs, and GCCs.",
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description:
        "Managed 500,000+ sq.ft. of office space, scaling teams to 500+ employees across verticals.",
    },
    {
      year: "2024",
      title: "Scaling Beyond India",
      description:
        "Crossed 1 million sq.ft. in office space management; VMR expanded into Dubai and Washington D.C.",
    },
    {
      year: "2025",
      title: "Birth of VeLease",
      description:
        "Leveraging lived experience, VeLease was launched as India's first corporate Furniture-as-a-Service (FaaS) interiors partner.",
    },
  ];

  return (
    <div className="company-timeline py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row section-row align-items-center mb-16">
          <div className="col-lg-12 text-center">
            <motion.h3
              className="text-accent text-lg font-semibold uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              our journey
            </motion.h3>
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Building the future of{" "}
              <span className="text-accent">office interiors</span>
            </motion.h2>
          </div>
        </div>

        <div className="timeline-container relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item relative flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                ref={(el) => {
                  if (el && !imageRefs.current.includes(el)) {
                    imageRefs.current.push(el);
                  }
                }}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="timeline-content ml-16 bg-white p-6 rounded-lg shadow-md">
                  <div className="timeline-year text-accent font-bold text-lg mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTimeline;
