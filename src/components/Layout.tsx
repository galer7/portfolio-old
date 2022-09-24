import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const GradientBackground = () => {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 left-[20%] overflow-hidden -z-10">
          <Image
            src="/gradients/gradient1.png"
            alt="First gradient"
            className="bg-no-repeat will-change-transform w-[500px] h-[500px]"
            height={500}
            width={500}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 left-1/2 top-1/3 overflow-hidden -z-10">
          <Image
            src="/gradients/gradient2.png"
            alt="First gradient"
            className="bg-no-repeat will-change-transform w-[500px] h-[500px]"
            height={500}
            width={500}
          />
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
      <div className="z-10">{children}</div>

      {GradientBackground()}
    </>
  );
}
