import { ErrorIcon, SuccessCircleIcon } from "common/icons";
import { InputProps } from "common/types";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { v4 } from "uuid";

interface TextFieldProps extends InputProps {
  label?: React.ReactNode;
  requireText?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  name: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, startIcon, endIcon, label = "", requireText = "", ...props },
    ref
  ) => {
    const inputId = v4();
    const {
      formState: { errors, isSubmitSuccessful },
    } = useFormContext();
    const error = errors?.[props.name];

    return (
      <div className={`tw-flex tw-flex-col ${className}`}>
        {label !== "" && (
          <label htmlFor={inputId} className="tw-text-label1 tw-font-medium">
            {label}{" "}
            {requireText && (
              <span className="tw-text-error">{requireText}</span>
            )}
          </label>
        )}
        <div
          className={`tw-bg-primary-grey tw-flex tw-gap-8 tw-rounded-8 tw-items-center tw-px-16 tw-h-40 ${
            !!error ? "tw-border-error tw-border" : ""
          }`}
        >
          {startIcon}
          <input
            ref={ref}
            id={inputId}
            type="text"
            className="tw-bg-transparent tw-flex-auto tw-text-body2 tw-text-black-80 tw-font-medium tw-h-20"
            placeholder="Placeholder"
            {...props}
          />
          {isSubmitSuccessful && !error && <SuccessCircleIcon />}
          {Object.keys(error ?? {}).length !== 0 && <ErrorIcon />}
          {endIcon}
        </div>
        {!!error && (
          <label
            htmlFor={inputId}
            className={`tw-text-label2 tw-font-medium tw-text-error`}
          >
            {(error?.message ?? "").toString()}
          </label>
        )}
      </div>
    );
  }
);
