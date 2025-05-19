"use client";

import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/utils/cn";

const buttonVariants = tv({
  base: "relative inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium leading-5 shadow-sm outline-none transition duration-150 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-450 disabled:text-blue-40 disabled:shadow-none data-[loading=true]:border-slate-200 data-[loading=true]:bg-slate-100 data-[loading=true]:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 [&:active:not(:disabled)]:scale-[0.98] [&:active:not(:disabled)]:opacity-90",
  variants: {
    intent: {
      primary: "bg-tertiary font-bold text-blue-80",
      secondary:
        "rounded-4xl border-2 border-tertiary bg-transparent font-bold text-blue-40",
      tertiary: "border-blue-80 bg-transparent text-blue-80",
      icon: "shrink-0 !p-1.5 shadow-none",
      nav: "justify-start gap-1 rounded-none !px-0 py-2 text-base font-light text-mint-20",
      error: "rounded-2xl bg-secondary text-error",
    },
    size: {
      xs: "px-2 py-0.5",
      sm: "px-2 py-1",
      lg: "px-4 py-3",
      base: "px-5 py-2.5",
    },
    width: {
      fit: "w-fit",
      fluid: "w-full",
    },
  },
  compoundVariants: [
    {
      intent: "icon",
      size: "xs",
      class: "flex items-center justify-center",
    },
  ],
  defaultVariants: {
    intent: "tertiary",
    size: "base",
    width: "fit",
  },
});

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: VariantProps<typeof buttonVariants>;
  loading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, loading, asChild = false, type = "button", ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={type}
        {...props}
        data-loading={loading}
        className={cn(buttonVariants(variant), className)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
