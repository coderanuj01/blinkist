import { ButtonComponent } from "./Button";
import { Story } from "@storybook/react";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default {
  title: "Atom/Button",
  component: ButtonComponent,
};

type ButtonProps = {
  variant: "outlined" | "text" | "contained";
  //color?:string,
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: React.CSSProperties;
  children: React.ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  className?: string;
};

const Template: Story<ButtonProps> = (args) => (
  <ButtonComponent {...args}></ButtonComponent>
);

export const primaryA = Template.bind({});
primaryA.args = {
  variant: "outlined",
  startIcon: <ArrowForwardIcon />,
  color: "primary",
  children: "outlined Button is",
};

export const primaryB = Template.bind({});
primaryB.args = {
  variant: "contained",
  endIcon: <AddIcon />,
  color: "error",
  children: "contained Button is",
};

export const primaryC = Template.bind({});
primaryC.args = {
  variant: "text",
  startIcon: <AddIcon />,
  color: "error",
  children: "Text Button is",
};
