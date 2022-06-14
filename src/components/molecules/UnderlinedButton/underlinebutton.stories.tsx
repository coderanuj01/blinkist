import { Story } from "@storybook/react";
import { UnderlineButtonComponent } from "./UnderlineButton";

export default {
  title: "Molecules/UnderlineButton",
};

type UnderlineButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Template: Story<UnderlineButtonProps> = (args) => (
  <UnderlineButtonComponent {...args}></UnderlineButtonComponent>
);

export const underlineButtonA = Template.bind({});
underlineButtonA.args = {
  children: "Currently reading",
};
