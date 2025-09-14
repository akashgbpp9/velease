import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, Button, Badge, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Factory,
  Rocket,
  MapPinned,
  Users,
  Globe2,
  Sparkles,
} from "lucide-react";

// ---------- Data ----------
const TIMELINE = [
  {
    year: 2014,
    title: "Entering CRE Consulting",
    body: "Began advising businesses in Mumbai on commercial real estate, establishing credibility in office space consulting.",
    icon: <Building2 className="h-5 w-5" />,
    tag: "Origin",
  },
  {
    year: 2016,
    title: "VLMS Global Established",
    body: "Launched VLMS, a sales enablement services firm, building operational expertise across multiple industries.",
    icon: <Factory className="h-5 w-5" />,
    tag: "Ops",
  },
  {
    year: 2018,
    title: "Verified Market Research Founded",
    body: "Expanded into consulting with VMR, delivering market insights across industries and geographies.",
    icon: <Rocket className="h-5 w-5" />,
    tag: "Consulting",
  },
  {
    year: 2020,
    title: "Expansion into Pune",
    body: "Started CRE consulting in Pune while managing 200,000 sq.ft. of office space.",
    icon: <MapPinned className="h-5 w-5" />,
    tag: "Growth",
  },
  {
    year: 2021,
    title: "Diversification & Partnerships",
    body: "VLMS expanded into healthcare services; forged IT consulting partnerships with startups, MSMEs, and GCCs.",
    icon: <Users className="h-5 w-5" />,
    tag: "Alliances",
  },
  {
    year: 2023,
    title: "Rapid Growth",
    body: "Managed 500,000+ sq.ft. of office space, scaling teams to 500+ employees across verticals.",
    icon: <Rocket className="h-5 w-5" />,
    tag: "+500k sq.ft.",
  },
  {
    year: 2024,
    title: "Scaling Beyond India",
    body: "Crossed 1 million sq.ft. in office space management; VMR expanded into Dubai and Washington D.C.",
    icon: <Globe2 className="h-5 w-5" />,
    tag: "Intl.",
  },
  {
    year: 2025,
    title: "Birth of VeLease",
    body: "Leveraging lived experience, VeLease was launched as India’s first corporate Furniture-as-a-Service (FaaS) interiors partner.",
    icon: <Sparkles className="h-5 w-5" />,
    tag: "Launch",
  },
];

// ---------- Utilities ----------
function classNames(...s: (string | false | null | undefined)[]) {
  return s.filter(Boolean).join(" ");
}

// ---------- Component ----------
export default function VeLeaseHorizontalTimeline() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const ids = useMemo(() => TIMELINE.map((y) => `year-${y.year}`), []);

  // Handle scroll progress + active card detection
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const p = el.scrollLeft / (el.scrollWidth - el.clientWidth);
      setProgress(Number.isFinite(p) ? p : 0);

      // find card nearest to center
      const children = Array.from(
        el.querySelectorAll<HTMLElement>("[data-tl-card]")
      );
      const center = el.scrollLeft + el.clientWidth / 2;
      let nearestIdx = 0;
      let nearestDist = Infinity;
      children.forEach((child, idx) => {
        const rectLeft = child.offsetLeft + child.clientWidth / 2;
        const d = Math.abs(rectLeft - center);
        if (d < nearestDist) {
          nearestDist = d;
          nearestIdx = idx;
        }
      });
      const EDGE_TOLERANCE = 24; // px tolerance for edge clamping
      const atStart = el.scrollLeft <= EDGE_TOLERANCE;
      const atEnd =
        el.scrollLeft >= el.scrollWidth - el.clientWidth - EDGE_TOLERANCE;
      if (atStart) {
        setActive(0);
      } else if (atEnd) {
        setActive(TIMELINE.length - 1);
      } else {
        setActive(nearestIdx);
      }
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Immediately reflect selection
    setActive(idx);
    const card = el.querySelectorAll<HTMLElement>("[data-tl-card]")[idx];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const jump = (dir: -1 | 1) => {
    const next = Math.min(Math.max(active + dir, 0), TIMELINE.length - 1);
    scrollToIndex(next);
  };

  return (
    <div className="w-full my-4 px-5">
      {/* Header */}
      <div className="mb-6 d-flex flex-column flex-sm-row align-items-sm-end justify-content-sm-between gap-3">
        <div>
          <h2 className="h2 h3-sm fw-semibold">Our Journey</h2>
          <p className="text-muted small">
            A horizontal timeline—scroll, drag, or use arrows.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => jump(-1)}
            aria-label="Previous milestone"
            className="p-2"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => jump(1)}
            aria-label="Next milestone"
            className="p-2"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>

      {/* Year rail (desktop) */}
      <div className="d-none d-md-block mb-4">
        {/* Progress bar above buttons */}
        <div className="mb-2 position-relative" style={{ height: "6px" }}>
          <div className="position-absolute top-0 start-0 w-100 h-100 rounded-pill " />
          <div
            className="position-absolute top-0 start-0 h-100 rounded-pill bg-primary"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        {/* Year buttons */}
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`,
            gap: "0.5rem",
          }}
        >
          {TIMELINE.map((item, idx) => (
            <Button
              key={item.year}
              onClick={() => scrollToIndex(idx)}
              variant={idx === active ? "primary" : "outline-secondary"}
              size="sm"
              className="rounded-pill"
            >
              {item.year}
            </Button>
          ))}
        </div>
      </div>

      {/* Horizontal scroller */}
      <div
        ref={scrollerRef}
        className="position-relative overflow-x-auto overflow-y-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          height: "auto",
        }}
      >
        <style>{`
            /* Hide scrollbar for WebKit browsers */
            .overflow-auto::-webkit-scrollbar { display: none; }
          `}</style>

        <div className="d-flex gap-4 pe-4" style={{ scrollSnapType: "x" }}>
          {TIMELINE.map((item, idx) => (
            <TimelineCard
              key={item.year}
              item={item}
              idx={idx}
              active={active === idx}
              id={ids[idx]}
            />
          ))}
        </div>
      </div>

      {/* Mobile mini-rail */}
      <div className="d-md-none my-4 d-flex align-items-center h-auto gap-2">
        {TIMELINE.map((m, idx) => (
          <button
            key={m.year}
            onClick={() => scrollToIndex(idx)}
            className={classNames(
              "h-2 w-100 rounded-pill border-0",
              idx <= active ? "bg-primary" : "bg-secondary"
            )}
            aria-label={`Jump to ${m.year}`}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineCard({
  item,
  idx,
  active,
  id,
}: {
  item: any;
  idx: number;
  active: boolean;
  id: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: false,
    margin: "0px 200px -20% 200px",
  });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(
      inView
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0.6, y: 20, scale: 0.98 }
    );
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      id={id}
      data-tl-card
      initial={{ opacity: 0.6, y: 20, scale: 0.98 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={classNames("snap-center", active ? "" : "opacity-80")}
      style={{ maxWidth: "680px" }}
    >
      <Card
        className={classNames(
          "rounded-3 shadow-sm border",
          active ? "border-primary" : "border-secondary"
        )}
        style={{ minWidth: "520px" }}
      >
        <Card.Header className="pb-3">
          <div className="d-flex align-items-center gap-2">
            <Badge
              bg={active ? "primary" : "secondary"}
              className="rounded-pill d-flex align-items-center justify-content-center"
              style={{ width: "32px", height: "32px" }}
            >
              {item.icon}
            </Badge>
            <span className="text-muted small">{item.year}</span>
          </div>
          <Card.Title className="mt-1 h5">{item.title}</Card.Title>
        </Card.Header>
        <Card.Body className="pt-0">
          <p className="text-muted small">{item.body}</p>
          <hr className="my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <Badge bg="outline-secondary" className="rounded-pill">
              {item.tag}
            </Badge>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Anchor to this milestone</Tooltip>}
            >
              <Button variant="link" size="sm" className="p-0">
                Copy link
              </Button>
            </OverlayTrigger>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
