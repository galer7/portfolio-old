import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const GradientBackground = () => {
    return (
      <>
        <div className="pointer-events-none fixed inset-0 top-[2%] lg:left-[18%] overflow-hidden -z-10 lg:w-[700px] lg:h-[700px] h-2/3">
          <Image
            src="/gradients/gradient1.png"
            alt="First gradient"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="pointer-events-none fixed inset-0 top-1/3 lg:left-[42%] overflow-hidden -z-10 lg:w-[700px] lg:h-[700px]">
          <Image
            src="/gradients/gradient2.png"
            alt="Second gradient"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </>
    );
  };

  return (
    <>
      {GradientBackground()}

      {/* <svg
        className="pointer-events-none fixed isolate z-50 opacity-99 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="fractalNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#fractalNoise)"></rect>
      </svg> */}
      <div className="z-10">{children}</div>
    </>
  );
}
