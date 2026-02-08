import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoverBorderGradientProps {
  children: ReactNode;
  className?: string;
}

export function HoverBorderGradient({
  children,
  className,
}: HoverBorderGradientProps) {
  return (
    <div
      className={cn(
        "relative inline-flex rounded-full p-[1px] overflow-hidden group",
        className
      )}
    >
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#ff7a00,#ff3f8f,#5de2ff,#ff7a00)] opacity-70 group-hover:opacity-100 transition" />
      <div className="relative z-10 rounded-full bg-neutral-950/90 px-6 py-3 text-sm font-semibold text-white shadow-lg">
        {children}
      </div>
    </div>
  );
}
