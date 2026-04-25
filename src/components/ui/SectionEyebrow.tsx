import { cn } from "@/lib/utils";

export default function SectionEyebrow({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("uppercase tracking-[0.2em] text-[10px] text-silver-muted font-sans", className)}>
      {children}
    </div>
  );
}
