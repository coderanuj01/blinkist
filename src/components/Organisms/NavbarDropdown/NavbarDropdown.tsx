import { Box, ThemeProvider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExtendedNavData from "../../../data/NavDropdownData";
import theme from "../../../theme/theme";
import { IconTextComponent } from "../../molecules/IconWithText/IconText";

export const NavbarDropdownComponent = () => {
  const navigate = useNavigate();
  const entrapreneurPage = () => {
    navigate("/entrepreneurship");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          zIndex: 1,
          backgroundColor: "rgba(157, 163, 166, 0.45)",
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "368px",
            backgroundColor: "#F1F6F4",
            position: "absolute",
            zIndex: 10,
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              width: "900px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                height: "74px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                borderBottom: "2px solid black",
                position: "relative",
              }}
            >
              <Typography sx={{ fontFamily: "Cera Pro", marginTop: "22px" }}>
                Explore by category
              </Typography>
              <Typography sx={{ marginTop: "22px" }}>
                See recently added titles
              </Typography>
              <Typography sx={{ marginTop: "22px", marginRight: "250px" }}>
                See popular Titles
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              {ExtendedNavData.map((item, key) => {
                return (
                  <Box
                    key={key}
                    sx={{
                      width: "292px",
                      display: "flex",
                      flexDirection: "row",
                      cursor: "pointer",
                    }}
                  >
                    <IconTextComponent
                      iconSource={item.icon}
                      key={key}
                      title={item.title}
                      variant="caption"
                      onClick={entrapreneurPage}
                    ></IconTextComponent>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
