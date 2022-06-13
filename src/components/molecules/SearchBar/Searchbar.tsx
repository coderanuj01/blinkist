import { Box, ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
import { IconButtonComponent } from "../../atoms/IconButtons/IconButton";
import { ReactComponent as SearchIcon } from "../../../Icon/searchicon.svg";
import theme from "../../../theme/theme";

type searchbarProps = {
  children?: React.ReactNode;
};

const MyInput = styled("input")({
  border: "none",
  fontFamily: "Cera Pro",
  "&:focus": {
    outline: "none",
  },
});

export const SearchbarComponent = (props: searchbarProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Box
          style={{
            borderBottom: "1.5px solid #BAC9CF",
            width: "598px",
            display: "flex",
          }}
        >
          <IconButtonComponent children={<SearchIcon />}></IconButtonComponent>
          <MyInput
            type="text"
            placeholder="Search by title or author"
          ></MyInput>
        </Box>
      </>
    </ThemeProvider>
  );
};
