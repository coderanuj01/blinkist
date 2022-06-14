import { Story } from "@storybook/react";
import { NavbarDropdownComponent } from "./NavbarDropdown";

export default {
  title: "Organism/NavbarDropdowns",
};

const Template: Story = () => (
  <NavbarDropdownComponent></NavbarDropdownComponent>
);

export const NavbarDropdown = Template.bind({});
NavbarDropdown.args = {};
