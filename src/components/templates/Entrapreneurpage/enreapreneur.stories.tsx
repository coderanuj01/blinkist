import { Story } from "@storybook/react";
import { EntrepreneurshipPageComponent } from "./Entrapreneur";

export default {
  title: "pages/Entrapreneurship",
};

type EntrepreneurshipProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

const Template: Story<EntrepreneurshipProps> = (args) => (
  <EntrepreneurshipPageComponent {...args}></EntrepreneurshipPageComponent>
);

export const EntrapreneurshipPage = Template.bind({});
EntrapreneurshipPage.args = {};
