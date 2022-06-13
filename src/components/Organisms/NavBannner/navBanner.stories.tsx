import { Story } from "@storybook/react";
import { NavBannerComponent } from "./NavBanner";

export default {
  title: "Organism/Navbanner",
};

type NavBannerProps = {};

const Template: Story<NavBannerProps> = (args) => (
  <NavBannerComponent {...args}></NavBannerComponent>
);

export const NavbarBanner = Template.bind({});
NavbarBanner.args = {};
