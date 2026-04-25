import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ChromeBorderProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  radius?: "sm" | "md" | "lg" | "full";
}

export default function ChromeBorder({
  children,
  className,
  innerClassName,
  radius = "lg",
  ...props
}: ChromeBorderProps) {
  const radiusMap = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  };
  
  const innerRadiusMap = {
    sm: "rounded-[calc(0.125rem-1px)]", 
    md: "rounded-[calc(0.375rem-1px)]", 
    lg: "rounded-[calc(0.5rem-1px)]",   
    full: "rounded-full"
  };

  return (
    <motion.div className={cn("relative p-[1px] bg-chrome-border", radiusMap[radius], className)} {...props}>
      <div className={cn("bg-ink-elevated h-full w-full overflow-hidden", innerRadiusMap[radius], innerClassName)}>
        {children}
      </div>
    </motion.div>
  );
}
