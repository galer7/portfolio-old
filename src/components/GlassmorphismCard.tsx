import React from "react";

export default function GlassmorphismCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="fixed w-3/4 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500/[.2] bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl border-2 border-gray-400 border-opacity-25 max-w-max">
      {children}
    </div>
  );
}
