import { Story } from "@storybook/react";
import React from "react";
import { IconButtonComponent } from "./IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default {
  title: "Atom/IconButton",
  component: IconButtonComponent,
};

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
  size?: "small" | "medium" | "large" | undefined;
};

const Template: Story<IconButtonProps> = (args) => (
  <IconButtonComponent {...args}></IconButtonComponent>
);

export const IconButonA = Template.bind({});
IconButonA.args = {
  color: "primary",
  children: <KeyboardArrowDownIcon />,
};

export const IconButonB = Template.bind({});
IconButonB.args = {
  color: "warning",
  children: <KeyboardArrowUpIcon />,
};
