import { ButtonComponent } from "./Button";
import { Story } from "@storybook/react";
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
    | "warning";
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
