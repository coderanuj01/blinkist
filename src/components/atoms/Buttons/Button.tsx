import { Button, Typography } from "@mui/material";

type ButtonProps = {
  variant: "outlined" | "text" | "contained";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: React.CSSProperties;
  children: React.ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  className?: string;
  textColor?: string;
};

export const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      endIcon={props.endIcon}
      startIcon={props.startIcon}
      style={props.style}
    >
      <Typography
        textTransform={"none"}
        sx={{
          fontSize: 16,
          fontFamily: "Cera Pro !important",
          fontWeight: 500,
        }}
        id="impButton"
        color={props.textColor}
      >
        {props.children}
      </Typography>
    </Button>
  );
};
