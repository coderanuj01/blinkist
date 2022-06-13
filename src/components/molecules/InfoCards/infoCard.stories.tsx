import { Story } from "@storybook/react";
import { InfoCardComponent } from "./Infocard";
import BeyondEnterprenurship from "../../../../public/Images/BeyondEnterprenurship.png";
import dropshipping from "../../../../public/Images/dropshipping.png";

export default {
  title: "Molecules/InfoCard",
};

type InfocardProps = {
  source?: any;
  title?: React.ReactNode;
  writer?: React.ReactNode;
  readTime?: number;
  readCount?: number;
  readStatus?:
    | "reading"
    | "addToLibrary"
    | "addToLibraryColor"
    | "finished"
    | "readAgain";
};

const Template: Story<InfocardProps> = (args) => (
  <InfoCardComponent {...args}></InfoCardComponent>
);

export const card1 = Template.bind({});
card1.args = {
  source: dropshipping,
  title: "Bring your human to work",
  writer: "erica tern",
  readCount: 56,
  readTime: 34,
};
