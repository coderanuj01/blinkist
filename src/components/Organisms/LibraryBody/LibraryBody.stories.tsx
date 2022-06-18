import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { LibraryBodyComponent } from "./LibraryBody";

export default {
  title: "Organism/Body/LibraryBody",
};

type BookPageProps = {};

const Template: Story<BookPageProps> = (args) => (
  <MemoryRouter>
    <LibraryBodyComponent {...args}></LibraryBodyComponent>
  </MemoryRouter>
);

export const page = Template.bind({});
page.args = {};
