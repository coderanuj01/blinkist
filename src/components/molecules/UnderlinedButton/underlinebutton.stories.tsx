import { Story } from "@storybook/react";
import { UnderlineButtonComponent } from "./UnderlineButton";

export default {
  title: "Molecules/UnderlineButtons",
};

type UnderlineButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Template: Story<UnderlineButtonProps> = (args) => (
  <UnderlineButtonComponent {...args}></UnderlineButtonComponent>
);

export const underlineButton = Template.bind({});
underlineButton.args = {
  children: "Currently reading",
  style: { borderBottom: "2px solid #2CE080", width: 300, paddingBottom: 1 },
};
