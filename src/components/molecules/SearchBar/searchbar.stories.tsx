import { SearchbarComponent } from "./Searchbar";
import { Story } from "@storybook/react";
import SearchIcon from "@mui/icons-material/Search";

export default {
  title: "Molecules/serchBar",
  component: SearchbarComponent,
};

type searchbarProps = {
  children?: React.ReactNode;
};

const Template: Story<searchbarProps> = (args) => (
  <SearchbarComponent {...args}></SearchbarComponent>
);

export const SearchBar = Template.bind({});
SearchBar.args = {
  children: <SearchIcon />,
};
