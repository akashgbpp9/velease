import React, { useEffect, useState, useRef } from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorState {
  color: string;
  outerScale: number;
  innerScale: number;
  outerStyle: React.CSSProperties;
  innerStyle: React.CSSProperties;
}

const AdvancedAnimatedCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<any>({
    color: "#7c877f",
    outerScale: 15,
    innerScale: 0.15,
    outerStyle: {
      borderWidth: "2px",
      mixBlendMode: "exclusion",
      borderStyle: "solid",
      // backgroundColor: "transparent",
    },
    innerStyle: {
      backgroundColor: "#7c877f",
    },
  });

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursorOnHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Default cursor state
      let newState: CursorState = {
        color: "#7c877f",
        outerScale: 10,
        innerScale: 0.15,
        outerStyle: {
          borderWidth: "2px",
          borderStyle: "solid",
          // backgroundColor: "transparent",
          mixBlendMode: "exclusion",
        },
        innerStyle: {
          backgroundColor: "#7c877f",
        },
      };

      // Hero section - difference blend mode with white cursor
      if (target.closest(".hero")) {
        newState = {
          ...newState,
          color: "#ffffff",
          outerStyle: {
            ...newState.outerStyle,
            borderColor: "#ffffff",
            // backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          innerStyle: {
            backgroundColor: "#7c877f",
          },
        };
      }

      // About section - multiply blend mode
      else if (target.closest(".about-us")) {
        newState = {
          ...newState,
          outerScale: 10,
          innerScale: 0.15,
        };
      }

      // Services section - overlay blend mode
      else if (target.closest(".our-solutions")) {
        newState = {
          ...newState,

          outerScale: 2,
          innerScale: 0.2,
        };
      }

      // Projects section - soft-light blend mode
      else if (target.closest(".projects")) {
        newState = {
          ...newState,
          outerScale: 1.6,
          innerScale: 0.16,
        };
      }

      // Interactive elements - enhanced cursor
      else if (
        target.matches("a, button, .btn, .btn-default, input, textarea, select")
      ) {
        newState = {
          ...newState,
          outerScale: 2.5,
          innerScale: 0.5,
          outerStyle: {
            ...newState.outerStyle,
            borderColor: "#7c877f",
            // backgroundColor: "rgba(124, 135, 127, 0.1)",
          },
        };
      }

      // Image elements - larger cursor
      // else if (
      //   target.matches(
      //     " .service-image a, .project-image, .blog-image, .team-member, .about-img-1, .about-img-2, .why-choose-img-1, .why-choose-img-2, .why-choose-img-3, .why-choose-img-4"
      //   )
      // ) {
      //   newState = {
      //     ...newState,
      //     outerScale: 2.2,
      //     innerScale: 0.4,
      //     outerStyle: {
      //       ...newState.outerStyle,
      //       borderColor: "#7c877f",
      //       backgroundColor: "rgba(124, 135, 127, 0.15)",
      //     },
      //   };
      // }

      // Form elements - text cursor
      // else if (target.matches("input:focus, textarea:focus, select:focus")) {
      //   newState = {
      //     ...newState,
      //     outerScale: 2,
      //     innerScale: 0.3,
      //     outerStyle: {
      //       ...newState.outerStyle,
      //       borderColor: "#7c877f",
      //     },
      //   };
      // }

      // Section title h1 tags - enhanced cursor
      else if (
        target.matches(".section-title h1") ||
        target.matches(".section-title h2") ||
        target.matches("h2.text-anime-style-2")
      ) {
        newState = {
          ...newState,

          outerScale: 2.6,
          innerScale: 0.6,
          outerStyle: {
            ...newState.outerStyle,
            borderColor: "#7c877f",
            // backgroundColor: "rgba(124, 135, 127, 0.2)",
          },
          innerStyle: {
            backgroundColor: "#7c877f",
          },
        };
      }

      setCursorState(newState);
    };

    const updateCursorOnLeave = () => {
      setCursorState({
        color: "#7c877f",

        outerScale: 15,
        innerScale: 0.15,
        outerStyle: {
          borderWidth: "2px",
          borderStyle: "solid",
          mixBlendMode: "exclusion",
          backgroundColor: "transparent",
        },
        innerStyle: {
          backgroundColor: "#7c877f",
        },
      });
    };

    document.addEventListener("mouseover", updateCursorOnHover);
    document.addEventListener("mouseout", updateCursorOnLeave);

    return () => {
      document.removeEventListener("mouseover", updateCursorOnHover);
      document.removeEventListener("mouseout", updateCursorOnLeave);
    };
  }, []);

  return (
    <div ref={cursorRef}>
      <AnimatedCursor
        innerStyle={{
          ...cursorState.innerStyle,
          backgroundColor: cursorState.innerStyle.backgroundColor,
          // mixBlendMode: cursorState.blendMode as any,
          // ["-webkit-mix-blend-mode" as any]: cursorState.blendMode,
        }}
        outerStyle={{
          ...cursorState.outerStyle,
          border: `2px solid ${cursorState.color}`,
          // mixBlendMode: cursorState.blendMode as any,
          // ["-webkit-mix-blend-mode" as any]: cursorState.blendMode,
        }}
        innerScale={cursorState.innerScale}
        outerScale={cursorState.outerScale}
        color={cursorState.color}
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
          ".section-title h1",
          ".section-title h2",
          "h2.text-anime-style-2",
        ]}
      />
    </div>
  );
};

export default AdvancedAnimatedCursor;
