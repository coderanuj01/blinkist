import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { BookDetailBodyComponent } from "./BookDetailBody";

export default {
  title: "Organism/Body/BookDetailsBody",
};

const Template: Story = () => (
  <MemoryRouter>
    <BookDetailBodyComponent></BookDetailBodyComponent>
  </MemoryRouter>
);

export const BookDetailBody = Template.bind({});
BookDetailBody.args = {};
