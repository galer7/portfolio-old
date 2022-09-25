import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const GradientBackground = () => {
    return (
      <>
        <div className="pointer-events-none fixed inset-0 left-[18%] overflow-hidden -z-10 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]">
          <Image
            src="/gradients/gradient1.png"
            alt="First gradient"
            className="bg-no-repeat will-change-transform overflow-hidden"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="pointer-events-none fixed inset-0 left-[42%] top-1/3 overflow-hidden -z-10  w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]">
          <Image
            src="/gradients/gradient2.png"
            alt="First gradient"
            className="bg-no-repeat will-change-transform overflow-hidden"
            layout="fill"
            objectFit="cover"
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
