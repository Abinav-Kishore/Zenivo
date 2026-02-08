"use client";

import Spline from "@splinetool/react-spline";

interface SplineEmbedProps {
  scene: string;
}

export function SplineEmbed({ scene }: SplineEmbedProps) {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-2xl">
      <Spline scene={scene} />
    </div>
  );
}
