import { Story } from "@storybook/react";
import { NavbarComponent } from "./Navbar";

export default {
  title: "Organism/Navbar",
};

const Template: Story = () => <NavbarComponent></NavbarComponent>;

export const NavbarA = Template.bind({});
NavbarA.args = {
  isLoggedIn: true,
};
