import { DivProps } from "common/types";
import * as React from "react";

export interface ShadowProps extends DivProps {}
export const Shadow: React.FunctionComponent<DivProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`tw-relative ${className}`} {...props}>
      <div className=" tw-absolute tw-inset-0 tw-shadow -tw-z-10 tw-rounded-[inherit]"/>
      {children}
    </div>
  );
};
