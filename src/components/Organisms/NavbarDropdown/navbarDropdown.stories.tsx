import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { NavbarDropdownComponent } from "./NavbarDropdown";

export default {
  title: "Organism/NavbarDropdowns",
};

const Template: Story = () => (
  <MemoryRouter>
    <NavbarDropdownComponent></NavbarDropdownComponent>
  </MemoryRouter>
);

export const NavbarDropdown = Template.bind({});
NavbarDropdown.args = {};
