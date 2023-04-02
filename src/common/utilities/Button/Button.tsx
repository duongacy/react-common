import { Size } from "common/types";
import * as React from "react";
export type ButtonVariant = "primary" | "outlined" | "secondary" | "text";
export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: Size;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className = "",
      size = "sm",
      variant = "primary",
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`tw-rounded-8 disabled:tw-text-black-20 tw-flex tw-gap-4 tw-items-center tw-duration-200 disabled:tw-pointer-events-none tw-font-medium tw-whitespace-nowrap tw-select-none ${
          variant === "primary"
            ? "tw-text-button tw-bg-primary tw-text-primary-white hover:tw-bg-primary-120 active:tw-bg-primary-140 disabled:tw-bg-primary-grey"
            : ""
        } ${
          variant === "outlined"
            ? " tw-border-black-20 tw-border hover:tw-border-black-40 tw-text-black-80 hover:tw-text-black"
            : ""
        } ${
          variant === "secondary"
            ? " tw-text-black tw-bg-secondary hover:tw-bg-secondary-120 active:tw-bg-secondary-140 disabled:tw-bg-primary-grey"
            : ""
        } ${
          variant === "text"
            ? " tw-text-primary hover:tw-text-primary-120 active:tw-text-primary-140"
            : ""
        } ${size === "sm" ? "tw-px-12 tw-py-4" : ""} ${
          size === "md" ? "tw-px-16 tw-py-8" : ""
        } ${size === "lg" ? "tw-px-16 tw-py-12" : ""} ${className}`}
        {...props}
      >
        {leftIcon} {children} {rightIcon}
      </button>
    );
  }
);
