import { Story } from "@storybook/react";
import { SimpleButtonComponent } from "./SimpleButton";
import AddIcon from "@mui/icons-material/Add";

export default {
  title: "Molecules/SimpleButtons",
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

export const simplelineButton = Template.bind({});
simplelineButton.args = {
  children: "Connect",
  buttonType: "connectRest",
};
