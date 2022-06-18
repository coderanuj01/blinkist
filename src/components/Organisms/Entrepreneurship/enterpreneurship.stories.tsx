import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { EntrepreneurshipComponent } from "./Entrepreneurship";

export default {
  title: "Organism/Body/enterpreneurShipBody",
};

const Template: Story = () => (
  <MemoryRouter>
    <EntrepreneurshipComponent></EntrepreneurshipComponent>
  </MemoryRouter>
);

export const EnterpreneurshipBody = Template.bind({});
EnterpreneurshipBody.args = {};
