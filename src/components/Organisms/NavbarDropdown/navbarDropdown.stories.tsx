import { Story } from "@storybook/react";
import { NavbarDropdownComponent } from "./NavbarDropdown";

export default {
  title: "Organism/NavbarDropdowns",
};

type NavbarDropdownProps = {
  children?: React.ReactNode;
};

const Template: Story<NavbarDropdownProps> = (args) => (
  <NavbarDropdownComponent {...args}></NavbarDropdownComponent>
);

export const NavbarDropdown = Template.bind({});
NavbarDropdown.args = {};
