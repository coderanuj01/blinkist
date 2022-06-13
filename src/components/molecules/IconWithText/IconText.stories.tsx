import { Story } from "@storybook/react";
import { IconTextComponent } from "./IconText";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactComponent as Entreprenuer } from "../../../../public/Icons/entreprenuer.svg";

export default {
  title: "molecules/Icontext",
};

type IconTextProps = {
  iconSource?: React.ReactNode;
  variant?:
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit";
  title?: string;
  className?: string;
  onClick?: () => void;
};

const Template: Story<IconTextProps> = (args) => (
  <IconTextComponent {...args}></IconTextComponent>
);

export const EntreprenuerIcon = Template.bind({});
EntreprenuerIcon.args = {
  iconSource: <Entreprenuer />,
  title: "Entreprenuershipsss",
  variant: "body1",
};
