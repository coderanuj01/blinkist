import { Story } from "@storybook/react";
import { NavbarComponent } from "./Navbar";

export default {
  title: "Organism/Navbar",
};

type NavbarProps = {
  children?: React.ReactNode;
  isLoggedIn?: boolean;
};

const Template: Story<NavbarProps> = (args) => (
  <NavbarComponent {...args}></NavbarComponent>
);

export const NavbarA = Template.bind({});
NavbarA.args = {
  isLoggedIn: true,
};

export const NavbarB = Template.bind({});
NavbarB.args = {
  isLoggedIn: false,
};
