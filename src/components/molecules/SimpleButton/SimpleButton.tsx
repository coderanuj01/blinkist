import { Typography } from "@mui/material";
import { IconButtonComponent } from "../../atoms/IconButtons/IconButton";
import { styled } from "@mui/system";

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

const ConnectedRestBox = styled("div")({
  width: 296,
  height: 34,
  backgroundColor: "#2CE080",
  borderRadius: 1,
  textAlign: "center",
  paddingTop: "12px",
});
//    backgroundColor: "#00C263",

const LibraryWithBorderBox = styled("div")({
  display: "flex",
  width: 150,
  height: 52,
  paddingLeft: "18px",
});

const AddToLibraryBox = styled("div")({
  display: "flex",
  height: 42,
  paddingLeft: "0px",
});

export const SimpleButtonComponent = (props: simpleButtonProps) => {
  const elem = (prop: any) => {
    switch (prop) {
      case "connectRest":
        return (
          <ConnectedRestBox>
            <Typography>{props.children}</Typography>
          </ConnectedRestBox>
        );

      case "connectHover":
        return (
          <ConnectedRestBox>
            <Typography>{props.children}</Typography>
          </ConnectedRestBox>
        );

      case "libraryWithBorder":
        return (
          <LibraryWithBorderBox>
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"info"}
            />
            <Typography
              variant="body2"
              sx={{ marginTop: 1.7, color: "#0365F2" }}
            >
              {props.children}
            </Typography>
          </LibraryWithBorderBox>
        );

      case "libraryWithoutBorder":
        return (
          <LibraryWithBorderBox>
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"inherit"}
            />
            <Typography
              variant="body2"
              sx={{ marginTop: 1.7, color: "#FFFFFF" }}
            >
              {props.children}
            </Typography>
          </LibraryWithBorderBox>
        );

      case "buttonForCard":
        return (
          <AddToLibraryBox>
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"inherit"}
            />
            <Typography variant="body2" sx={{ marginTop: 1.4 }}>
              {props.children}
            </Typography>
          </AddToLibraryBox>
        );

      case "buttonForAddCard":
        return (
          <AddToLibraryBox>
            <IconButtonComponent
              children={props.icon}
              size={"small"}
              color={"inherit"}
            />
            <Typography
              variant="body2"
              sx={{ marginTop: 1.4, color: "#FFFFFF" }}
            >
              {props.children}
            </Typography>
          </AddToLibraryBox>
        );
    }
  };

  const { buttonType, children, icon } = props;

  return <>{elem(buttonType)}</>;
};
