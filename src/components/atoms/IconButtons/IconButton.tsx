import IconButton from "@mui/material/IconButton";
import React from "react";

type IconButtonProps = {
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export const IconButtonComponent = (props: IconButtonProps) => {
  return (
    <IconButton
      color={props.color}
      children={props.children}
      size={props.size}
    />
  );
};
