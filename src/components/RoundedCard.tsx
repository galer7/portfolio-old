import React, { cloneElement } from "react";

export default function RoundedCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-1/2 h-[50vh] left-1/2 -translate-x-1/2 translate-y-1/2">
      <div className="flex justify-center items-center overflow-hidden">
        <img
          src="./gradient.png"
          className="absolute rounded-xl opacity-70 shadow-2xl flex-shrink-0 min-w-full min-h-full object-cover"
        />
      </div>
      <div className="absolute w-full">{children}</div>
    </div>
  );
}
