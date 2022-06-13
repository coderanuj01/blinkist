import { Story } from "@storybook/react";
import { LibraryBodyComponent } from "./LibraryBody";

export default {
  title: "Organism/enterpenureBody",
};

type BookPageProps = {};

const Template: Story<BookPageProps> = (args) => (
  <LibraryBodyComponent {...args}></LibraryBodyComponent>
);

export const page = Template.bind({});
page.args = {};
