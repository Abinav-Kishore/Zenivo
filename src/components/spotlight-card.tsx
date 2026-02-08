import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  title: string;
  description: string;
  className?: string;
}

export function SpotlightCard({
  title,
  description,
  className,
}: SpotlightCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur",
        className
      )}
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.5),transparent_65%)]" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-white/70">{description}</p>
    </div>
  );
}
