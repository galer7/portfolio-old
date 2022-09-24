import React from "react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const GradientBackground = () => {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-full bg-[url('/gradient.png')] bg-top bg-no-repeat will-change-transform"></div>
        </div>
      </>
    );
  };

  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      {children}
      {/* {GradientBackground()} */}
    </>
  );
}
