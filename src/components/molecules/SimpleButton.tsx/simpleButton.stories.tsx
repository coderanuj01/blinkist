import { Story } from "@storybook/react";
import { SimpleButtonComponent } from "./SimpleButton";
import AddIcon from "@mui/icons-material/Add";

export default {
  title: "Molecules/SimpleButton",
};

type simpleButtonProps = {
  children?: React.ReactNode;
  buttonType?:
    | "connectRest"
    | "connectHover"
    | "libraryWithBorder"
    | "libraryWithoutBorder"
    | "buttonForCard";
  icon?: React.ReactNode;
};

const Template: Story<simpleButtonProps> = (args) => (
  <SimpleButtonComponent {...args}></SimpleButtonComponent>
);

export const simplelineButtonA = Template.bind({});
simplelineButtonA.args = {
  children: "Connect",
  buttonType: "connectRest",
};

export const simplelineButtonB = Template.bind({});
simplelineButtonB.args = {
  children: "Connect",
  buttonType: "connectHover",
};

export const simplelineButtonC = Template.bind({});
simplelineButtonC.args = {
  children: "Add to library",
  buttonType: "libraryWithBorder",
  icon: <AddIcon />,
};

export const simplelineButtonD = Template.bind({});
simplelineButtonD.args = {
  children: "Add to library",
  buttonType: "libraryWithoutBorder",
  icon: <AddIcon />,
};

export const simplelineButtonE = Template.bind({});
simplelineButtonE.args = {
  children: "Currently reading",
  buttonType: "buttonForCard",
  icon: <AddIcon />,
};
