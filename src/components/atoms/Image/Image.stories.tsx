import { Story } from "@storybook/react";
import { ImageComponent } from "./Image";
import blink from "../../../../public/Images/blink.png";
import beingBoss from "../../../../public/Images/beingBoss.png";

export default {
  title: "Atom/Images",
  component: ImageComponent,
};

type ImageProps = {
  source?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Template: Story<ImageProps> = (args) => (
  <ImageComponent {...args}></ImageComponent>
);

export const Logo = Template.bind({});
Logo.args = {
  source: blink,
};

export const cardImg = Template.bind({});
cardImg.args = {
  source: beingBoss,
};
