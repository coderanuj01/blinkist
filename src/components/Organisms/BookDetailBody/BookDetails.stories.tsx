import { Story } from "@storybook/react";
import { BookDetailBodyComponent } from "./BookDetailBody";

export default {
  title: "Organism/BookDetailsBody",
};

type BookDetailsProps = {
  title?: string;
};

const Template: Story<BookDetailsProps> = (args) => (
  <BookDetailBodyComponent {...args}></BookDetailBodyComponent>
);

export const BookDetailBody = Template.bind({});
BookDetailBody.args = {};
