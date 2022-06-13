import { Story } from "@storybook/react";
import { UnderlineButtonComponent } from "./UnderlineButton";

export default {
  title: "Molecules/UnderlineButton",
};

type UnderlineButtonProps = {
  underlineButtonType?:
    | "selectedWithGreen"
    | "selectedWithWhite"
    | "unSelectedWithGreen"
    | "unSelectedWithWhite"
    | "blackWithGreen";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Template: Story<UnderlineButtonProps> = (args) => (
  <UnderlineButtonComponent {...args}></UnderlineButtonComponent>
);

export const underlineButtonA = Template.bind({});
underlineButtonA.args = {
  children: "Currently reading",
  underlineButtonType: "selectedWithGreen",
};

export const underlineButtonB = Template.bind({});
underlineButtonB.args = {
  children: "Currently reading",
  underlineButtonType: "selectedWithWhite",
};

export const underlineButtonC = Template.bind({});
underlineButtonC.args = {
  children: "Currently reading",
  underlineButtonType: "unSelectedWithGreen",
};

export const underlineButtonD = Template.bind({});
underlineButtonD.args = {
  children: "Currently reading",
  underlineButtonType: "unSelectedWithWhite",
};

export const underlineButtonE = Template.bind({});
underlineButtonE.args = {
  children: "Currently reading",
  underlineButtonType: "blackWithGreen",
};
