import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IconButtonComponent } from "../../atoms/IconButtons/IconButton";

type IconTextProps = {
  iconSource?: React.ReactNode;
  variant?:
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit";
  title?: string;
  className?: string;
  onClick?: () => void;
};

export const IconTextComponent = (props: IconTextProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <IconButtonComponent children={props.iconSource}></IconButtonComponent>
      <Typography
        variant={props.variant}
        onClick={props.onClick}
        sx={{ alignSelf: "center" }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};
