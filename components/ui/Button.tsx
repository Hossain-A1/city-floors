import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "eq inline-block whitespace-nowrap  rounded-md border px-4 py-2.5 text-center text-lg disabled:cursor-default disabled:border-gray disabled:bg-gray disabled:text-black",
  {
    variants: {
      variant: {
        primary: " text-blue border-blue ",
        secondary: "bg-blue text-white  font-medium  hover:border-blue  ",
        danger: "bg-danger text-light  hover:border-danger ",
        outline:
          "bg-transparent text-white border-blue hover:bg-blue hover:text-white",
        orange: "bg-orange text-light font-medium  border hover:border-orange ",
        deepLight: "bg-light/70 text-dark border-none  ",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  variant,
  size,
  isLoading,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        buttonVariants({ variant, size }),
        isLoading && "flex items-center justify-center gap-2.5"
      )}
    >
      {isLoading && <Loader2 size={20} className='animate-spin' />}
      {children}
    </button>
  );
};

export default Button;
