import { Box, ThemeProvider, Typography } from "@mui/material";
import theme from "../../../theme/theme";

export const NavBannerComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "264px",
          width: "912px",
          display: "flex",
          backgroundColor: "#F1F6F4",
        }}
      >
        <Box
          sx={{
            height: "180px",
            width: "461px",
            display: "flex",
            marginLeft: "45px",
            marginTop: "45px",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Box sx={{ height: "90px" }}>
            <Typography variant="h1">
              Explore Books on entrepreneurship
            </Typography>
          </Box>
          <Box sx={{ height: "69px" }}>
            <Typography variant="subtitle2">
              Everything you need to know about thriving on a <br></br>
              shoestring budget, making your first million, and hiring <br></br>
              right from the start.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "150px", height: "100px", marginTop: "22px" }}>
          <img src="Images/bannerImg.png"></img>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
