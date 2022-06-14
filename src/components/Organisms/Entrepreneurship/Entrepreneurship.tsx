import { Box } from "@mui/system";
import { SearchbarComponent } from "../../molecules/SearchBar/Searchbar";
import { EntrepreneurshipInnerComponent } from "../EnterprenureInner/EntrepreneurshipInner";
import { NavBannerComponent } from "../NavBannner/NavBanner";
import BooksDetails from "../../../data/BooksDetails";

export const EntrepreneurshipComponent = () => {
  let Trending = BooksDetails.filter((item) => item.status.isTrending);
  let justAdded = BooksDetails.filter((item) => item.status.justAdded);
  let Featured = BooksDetails.filter((item) => item.status.isFeatured);

  return (
    <Box sx={{ marginTop: "118px" }}>
      <Box>
        <NavBannerComponent></NavBannerComponent>
      </Box>
      <Box sx={{ marginTop: "61px" }}>
        <SearchbarComponent></SearchbarComponent>
      </Box>
      <EntrepreneurshipInnerComponent
        cardList={Trending}
        title={"Trending blinks"}
      ></EntrepreneurshipInnerComponent>
      <EntrepreneurshipInnerComponent
        cardList={justAdded}
        title={"Just added"}
      ></EntrepreneurshipInnerComponent>
      <EntrepreneurshipInnerComponent
        cardList={Featured}
        title={"Featured audio blinks"}
      ></EntrepreneurshipInnerComponent>
    </Box>
  );
};
