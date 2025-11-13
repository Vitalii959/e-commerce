import React from "react";

import "./container.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({children, className}: Props) => {
  return (
    <div className={`${className ? className : ""} container`}>{children}</div>
  );
};
