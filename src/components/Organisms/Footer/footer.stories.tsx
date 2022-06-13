import { Story } from "@storybook/react";
import { FooterComponent } from "./footer";

export default {
  title: "organism/Footers",
};

type FooterProps = {};

const Template: Story<FooterProps> = (args) => (
  <FooterComponent {...args}></FooterComponent>
);

export const footer = Template.bind({});
footer.args = {};
