import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const GradientBackground = () => {
    return (
      <>
        <div className="pointer-events-none fixed inset-0 top-[2%] lg:left-[18%] overflow-hidden -z-10 lg:w-[700px] lg:h-[700px] animate-pulse">
          <Image
            src="/gradients/gradient1.png"
            alt="First gradient"
            className="bg-no-repeat overflow-hidden h-32"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="pointer-events-none fixed inset-0 top-1/3 lg:left-[42%] overflow-hidden -z-10 lg:w-[700px] lg:h-[700px] animate-pulse offset-1s">
          <Image
            src="/gradients/gradient2.png"
            alt="Second gradient"
            className="bg-no-repeat overflow-hidden h-32"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-99 mix-blend-soft-light"
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
