import { Box, styled } from "@mui/system";
import { SearchbarComponent } from "../../molecules/SearchBar/Searchbar";
import { EntrepreneurshipInnerComponent } from "../EnterprenureInner/EntrepreneurshipInner";
import { NavBannerComponent } from "../NavBannner/NavBanner";
import BooksDetails from "../../../data/BooksDetails";

const OuterEnterpreneur = styled("div")({
  marginTop: "118px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "900px",
  marginBottom: "80px",
});

const OuterEnterDiv = styled("div")({
  width: "95vw",
});

const InnerEnterDiv = styled("div")({
  marginTop: "61px",
});

export const EntrepreneurshipComponent = () => {
  let Trending = BooksDetails.filter((item) => item.status.isTrending);
  let justAdded = BooksDetails.filter((item) => item.status.justAdded);
  let Featured = BooksDetails.filter((item) => item.status.isFeatured);

  return (
    <OuterEnterDiv>
      <OuterEnterpreneur>
        <Box>
          <NavBannerComponent></NavBannerComponent>
        </Box>
        <InnerEnterDiv>
          <SearchbarComponent></SearchbarComponent>
        </InnerEnterDiv>
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
      </OuterEnterpreneur>
    </OuterEnterDiv>
  );
};
