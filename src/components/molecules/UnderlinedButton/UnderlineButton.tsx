import { ThemeProvider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import theme from "../../../theme/theme";

type UnderlineButtonProps = {
  underlineButtonType?:
    | "selectedWithGreen"
    | "selectedWithWhite"
    | "unSelectedWithGreen"
    | "unSelectedWithWhite"
    | "blackWithGreen";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const UnderlineButtonComponent = (props: UnderlineButtonProps) => {
  const elem = () => {
    switch (props.underlineButtonType) {
      case "selectedWithGreen":
        return (
          <Box
            sx={{
              borderBottom: "2px solid #2CE080",
              width: 300,
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "cera Pro",
                fontWeight: 500,
                fontSize: "16px",
                color: "#03314B",
              }}
            >
              {props.children}
            </Typography>
          </Box>
        );

      case "selectedWithWhite":
        return (
          <Box
            sx={{
              borderBottom: "2px solid #E1ECFC",
              width: 300,
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "cera Pro",
                fontWeight: 500,
                fontSize: "16px",
                color: "#03314B",
              }}
            >
              {props.children}
            </Typography>
          </Box>
        );

      case "unSelectedWithGreen":
        return (
          <Box
            sx={{
              borderBottom: "2px solid #2CE080",
              width: 300,
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "cera Pro",
                fontWeight: 500,
                fontSize: "16px",
                color: "#03314B",
              }}
            >
              {props.children}
            </Typography>
          </Box>
        );

      case "unSelectedWithWhite":
        return (
          <Box
            sx={{
              borderBottom: "2px solid #E1ECFC",
              width: 300,
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Cera Pro",
                fontWeight: 500,
                fontSize: "16px",
                color: "#03314B",
              }}
            >
              {props.children}
            </Typography>
          </Box>
        );

      case "blackWithGreen":
        return (
          <Box
            sx={{
              borderBottom: "2px solid #2CE080",
              width: 300,
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "cera Pro",
                fontWeight: 500,
                fontSize: "16px",
                color: "#03314B",
              }}
            >
              {props.children}
            </Typography>
          </Box>
        );
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <>{elem()}</>
    </ThemeProvider>
  );
};
