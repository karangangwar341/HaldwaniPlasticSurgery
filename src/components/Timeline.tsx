interface TimelineItem {
  step?: number;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: "steps" | "recovery";
}

export default function Timeline({ items, variant = "steps" }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-8" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i} className="relative flex gap-6 md:gap-8">
            {/* Dot */}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white shadow-md md:h-16 md:w-16">
              {variant === "steps" && item.step ? (
                <span className="font-heading text-lg font-bold text-accent md:text-xl">
                  {item.step}
                </span>
              ) : (
                <svg className="h-5 w-5 text-accent md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="pt-2 pb-2">
              <h4 className="font-heading text-base font-semibold text-primary md:text-lg">
                {item.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-primary/70 md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
