import { SearchbarComponent } from "./Searchbar";
import { Story } from "@storybook/react";
import SearchIcon from "@mui/icons-material/Search";

export default {
  title: "Molecules/serchBar",
  component: SearchbarComponent,
};

const Template: Story = () => <SearchbarComponent></SearchbarComponent>;

export const SearchBar = Template.bind({});
SearchBar.args = {
  children: <SearchIcon />,
};
