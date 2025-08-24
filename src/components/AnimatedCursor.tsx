import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

interface AnimatedCursorProps {
  color?: string;
  outerScale?: number;
  innerScale?: number;
  outerStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  blendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";
}

const CustomAnimatedCursor: React.FC<AnimatedCursorProps> = ({
  color = "#7c877f",
  outerScale = 1.5,
  innerScale = 0.15,
  outerStyle = {},
  innerStyle = {},
  blendMode = "exclusion",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatedCursor
      innerStyle={{
        backgroundColor: color,
        mixBlendMode: blendMode,
        ...innerStyle,
      }}
      outerStyle={{
        border: `2px solid ${color}`,
        mixBlendMode: blendMode,
        ...outerStyle,
      }}
      innerScale={innerScale}
      outerScale={outerScale}
      color={color}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        ".btn",
        ".btn-default",
        ".service-image a",
        ".project-image",
        ".blog-image",
        ".team-member",
        ".why-choose-item",
        ".process-step",
        ".skill-item",
        ".testimonial-content",
        ".blog-item",
        ".about-img-1",
        ".about-img-2",
        ".why-choose-img-1",
        ".why-choose-img-2",
        ".why-choose-img-3",
        ".why-choose-img-4",
      ]}
    />
  );
};

export default CustomAnimatedCursor;
