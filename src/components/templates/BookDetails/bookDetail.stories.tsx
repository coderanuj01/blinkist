import { Story } from "@storybook/react";
import { BookDetailComponent } from "./BookDetail";

export default {
  title: "pages/BookDetails",
};

type BookPageProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

const Template: Story<BookPageProps> = (args) => (
  <BookDetailComponent {...args}></BookDetailComponent>
);

export const BookDetail = Template.bind({});
BookDetail.args = {};
