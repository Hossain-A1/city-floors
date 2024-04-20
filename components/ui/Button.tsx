import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "eq inline-block whitespace-nowrap  rounded-md border px-8 py-4 text-center text-sm uppercase disabled:cursor-default font-semibold disabled:border-gray disabled:bg-gray disabled:text-black",
  {
    variants: {
      variant: {
        primary: " text-blue border-blue ",
        secondary: " text-light  bg-blue button-modal  hover:border-blue  ",
        danger: "bg-danger text-light  hover:border-danger ",
        outline: " bg-dark text-light shadow-lg   text-sm  tracking-widest hover:scale-110",
        outline_2: " bg-orange text-light shadow-lg  text-sm  tracking-widest  hover:scale-110",
        outline_3: " bg-blue text-light shadow-lg  text-sm  tracking-widest  hover:scale-110",
        orange:
          "bg-orange text-light font-semibold button-modal border hover:border-orange ",
        deepLight:
          "bg-blue hover:bg-blue/70 text-light border-none uppercase  ",
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
