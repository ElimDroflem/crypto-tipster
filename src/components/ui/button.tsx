import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={className} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button };
