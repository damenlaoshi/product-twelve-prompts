import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seal",
  {
    variants: {
      variant: {
        solid:
          "bg-ink text-paper hover:bg-ink-soft",
        seal:
          "bg-seal text-seal-fg hover:opacity-90",
        outline:
          "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        ghost:
          "bg-transparent text-ink-soft hover:bg-paper-2 hover:text-ink",
        subtle:
          "bg-paper-2 text-ink hover:bg-line",
      },
      size: {
        sm: "h-9 rounded-sm px-3 text-sm",
        md: "h-11 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-5 text-base",
        icon: "size-11 rounded-md",
        pill: "h-9 rounded-full px-3.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
