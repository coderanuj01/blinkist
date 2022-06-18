import { styled } from "@mui/system";
import { IconButtonComponent } from "../../atoms/IconButtons/IconButton";
import { ReactComponent as SearchIcon } from "../../../Icon/searchicon.svg";

const MyInput = styled("input")({
  border: "none",
  fontFamily: "Cera Pro",
  "&:focus": {
    outline: "none",
  },
});

const MyBox = styled("div")({
  borderBottom: "1.5px solid #BAC9CF",
  width: "598px",
  display: "flex",
});

export const SearchbarComponent = () => {
  return (
    <>
      <MyBox>
        <IconButtonComponent children={<SearchIcon />} />
        <MyInput type="text" placeholder="Search by title or author" />
      </MyBox>
    </>
  );
};
