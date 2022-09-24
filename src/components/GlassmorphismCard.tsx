import React from "react";

export default function GlassmorphismCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="fixed lg:w-1/2 md:w-3/4 w-screen h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-0 mx-auto bg-gray-500/[.2] bg-clip-padding backdrop-filter backdrop-blur-md rounded-2xl">
      {children}
    </div>
  );
}
