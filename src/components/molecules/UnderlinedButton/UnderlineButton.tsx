import { ThemeProvider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import theme from "../../../theme/theme";

type UnderlineButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const UnderlineButtonComponent = (props: UnderlineButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={props.style}>
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
    </ThemeProvider>
  );
};
