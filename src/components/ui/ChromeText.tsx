import { cn } from "@/lib/utils";

export default function ChromeText({
  children,
  className,
  as: Component = "span",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}) {
  return (
    <Component className={cn("bg-chrome bg-clip-text text-transparent", className)} {...props}>
      {children}
    </Component>
  );
}
