import { Story } from "@storybook/react";
import { LibraryPageComponent } from "./LibraryPage";

export default {
  title: "pages/library",
};

type libraryProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

const Template: Story<libraryProps> = (args) => (
  <LibraryPageComponent {...args}></LibraryPageComponent>
);

export const page = Template.bind({});
page.args = {};
