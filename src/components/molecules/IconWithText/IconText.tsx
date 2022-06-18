import { styled } from "@mui/system";
import { Typography } from "@mui/material";
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

const MyBox = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const IconTextComponent = (props: IconTextProps) => {
  return (
    <MyBox>
      <IconButtonComponent children={props.iconSource} />
      <Typography
        variant={props.variant}
        onClick={props.onClick}
        sx={{ alignSelf: "center" }}
      >
        {props.title}
      </Typography>
    </MyBox>
  );
};
