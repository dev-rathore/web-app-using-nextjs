import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors ease-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-foreground",
        destructive:
          "bg-destructive text-white hover:bg-destructive-foreground",
        outline:
          "border border-2 border-aliceblue bg-white hover:bg-aliceblue hover:text-primary dark:text-black",
        secondary:
          "bg-secondary text-white hover:bg-secondary-foreground",
        ghost: "hover:bg-aliceblue hover:text-primary dark:text-white dark:hover:text-black",
        link: "text-primary underline-offset-4 hover:underline dark:text-white",
      },
      size: {
        default: "h-11 px-5 py-3",
        sm: "h-10 rounded-md px-4",
        lg: "h-12 rounded-md px-6",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    asChild = false,
    children,
    className,
    isLoading = false,
    size,
    variant,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    const Loader = isLoading ? <Loader2 strokeWidth="2.5" className={`${children ? 'mr-2': ''} h-5 w-5 animate-spin`} /> : null
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Loader} {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
