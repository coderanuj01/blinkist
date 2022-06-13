import { Story } from "@storybook/react";
import { CardGridComponent } from "./CardGrid";

export default {
  title: "Molecules/CardGrids",
};

type CardGridProps = {};

const Template: Story<CardGridProps> = (args) => (
  <CardGridComponent {...args}></CardGridComponent>
);

export const cardGrid = Template.bind({});
cardGrid.args = {};
