import { Box, Typography } from "@mui/material";
import { IconButtonComponent } from "../../atoms/IconButtons/IconButton";

type simpleButtonProps = {
  children?: React.ReactNode;
  buttonType?:
    | "connectRest"
    | "connectHover"
    | "libraryWithBorder"
    | "libraryWithoutBorder"
    | "buttonForCard"
    | "buttonForAddCard";
  icon?: React.ReactNode;
};

export const SimpleButtonComponent = (props: simpleButtonProps) => {
  const elem = () => {
    switch (props.buttonType) {
      case "connectRest":
        return (
          <Box
            sx={{
              width: 296,
              height: 34,
              backgroundColor: "#2CE080",
              borderRadius: 1,
              textAlign: "center",
              paddingTop: "12px",
            }}
          >
            <Typography>{props.children}</Typography>
          </Box>
        );

      case "connectHover":
        return (
          <Box
            sx={{
              width: 296,
              height: 34,
              backgroundColor: "#00C263",
              borderRadius: 1,
              textAlign: "center",
              paddingTop: "12px",
            }}
          >
            <Typography>{props.children}</Typography>
          </Box>
        );

      case "libraryWithBorder":
        return (
          <Box
            sx={{
              display: "flex",
              width: 150,
              height: 52,
              paddingLeft: "18px",
            }}
          >
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"info"}
            ></IconButtonComponent>
            <Typography
              variant="body2"
              sx={{ marginTop: 1.7, color: "#0365F2" }}
            >
              {props.children}
            </Typography>
          </Box>
        );

      case "libraryWithoutBorder":
        return (
          <Box
            sx={{
              display: "flex",
              width: 150,
              height: 52,
              backgroundColor: "#0365F2",
              paddingLeft: "18px",
            }}
          >
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"inherit"}
            ></IconButtonComponent>
            <Typography
              variant="body2"
              sx={{ marginTop: 1.7, color: "#FFFFFF" }}
            >
              {props.children}
            </Typography>
          </Box>
        );

      case "buttonForCard":
        return (
          <Box
            sx={{
              display: "flex",
              height: 42,
              paddingLeft: "0px",
            }}
          >
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"inherit"}
            ></IconButtonComponent>
            <Typography variant="body2" sx={{ marginTop: 1.4 }}>
              {props.children}
            </Typography>
          </Box>
        );

      case "buttonForAddCard":
        return (
          <Box
            sx={{
              display: "flex",
              height: 42,
              paddingLeft: "0px",
            }}
          >
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"inherit"}
            ></IconButtonComponent>
            <Typography
              variant="body2"
              sx={{ marginTop: 1.4, color: "#FFFFFF" }}
            >
              {props.children}
            </Typography>
          </Box>
        );
    }
  };

  return <>{elem()}</>;
};
