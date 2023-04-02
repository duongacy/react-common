import { InputProps } from "common/types";
import { Shadow } from "common/utilities";
import {
    forwardRef, useEffect, useState
} from "react";
import { useFormContext } from "react-hook-form";

export type SelectOption<T = any> = {
  value: T;
  label: string;
};

interface SelectProps extends Omit<InputProps, "onSelect"> {
  options: SelectOption[];
  name: string;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ options, ...props }, ref) => {
    const { setValue, watch } = useFormContext();
    const value = watch(props.name);

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      setIsOpen((prev) => !prev);
    }, [value]);
    return (
      <div
        className=" tw-h-36 tw-bg-primary-grey tw-py-8 tw-px-12 tw-text-body2 tw-rounded-8 tw-relative tw-cursor-pointer tw-select-none tw-font-medium"
      >
        <input
          type="text"
          className="-tw-z-10 tw-absolute tw-w-0 tw-h-0"
          {...props}
        />
        <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
          {
            options.find((item) => item.value === watch(props.name ?? ""))
              ?.label
          }
          <i className={`fa fa-chevron-${isOpen ? "up" : "down"}`} />
        </div>
        {isOpen && (
          <div
            className="tw-absolute tw-left-0 tw-right-0 tw-top-full tw-z-50 tw-bg-primary-white tw-pt-8"
          >
            <Shadow className="tw-p-12 tw-space-y-4 tw-rounded-8">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => setValue(props.name, option?.value)}
                  className={` tw-h-28 tw-px-8 tw-py-4 tw-rounded-4  ${
                    option.value === watch(props.name) ? "tw-bg-[#F2F3F4]" : ""
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </Shadow>
          </div>
        )}
      </div>
    );
  }
);
